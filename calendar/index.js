const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');
const moment = require('moment');
const chalk = require('chalk');
const prompts = require('prompts');
const { rep, repType, accounts, meetings, types } = require('./config');

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = 'token.json';

function scrapeGoogleCalendar(timeMin, timeMax, cb) {
	// Load client secrets from a local file.
	fs.readFile('credentials.json', (err, content) => {
		if (err) return console.log('Error loading client secret file:', err);
		// Authorize a client with credentials, then call the Google Calendar API.
		authorize(JSON.parse(content), writeEvents);
	});

	/**
	 * Create an OAuth2 client with the given credentials, and then execute the
	 * given callback function.
	 * @param {Object} credentials The authorization client credentials.
	 * @param {function} callback The callback to call with the authorized client.
	 */
	function authorize(credentials, callback) {
		const {client_secret, client_id, redirect_uris} = credentials.installed;
		const oAuth2Client = new google.auth.OAuth2(
				client_id, client_secret, redirect_uris[0]);

		// Check if we have previously stored a token.
		fs.readFile(TOKEN_PATH, (err, token) => {
			if (err) return getAccessToken(oAuth2Client, callback);
			oAuth2Client.setCredentials(JSON.parse(token));
			callback(oAuth2Client);
		});
	};

	/**
	 * Get and store new token after prompting for user authorization, and then
	 * execute the given callback with the authorized OAuth2 client.
	 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
	 * @param {getEventsCallback} callback The callback for the authorized client.
	 */
	function getAccessToken(oAuth2Client, callback) {
		const authUrl = oAuth2Client.generateAuthUrl({
			access_type: 'offline',
			scope: SCOPES,
		});
		console.log('Authorize this app by visiting this url:', authUrl);
		const rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout,
		});
		rl.question('Enter the code from that page here: ', (code) => {
			rl.close();
			oAuth2Client.getToken(code, (err, token) => {
				if (err) return console.error('Error retrieving access token', err);
				oAuth2Client.setCredentials(token);
				// Store the token to disk for later program executions
				fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
					if (err) return console.error(err);
					console.log('Token stored to', TOKEN_PATH);
				});
				callback(oAuth2Client);
			});
		});
	};

	/**
	 * Lists the next 10 events on the user's primary calendar.
	 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
	 */
	async function writeEvents(auth) {
		const calendar = google.calendar({version: 'v3', auth});
		
		const config = {
			calendarId: 'primary',
			timeMin,
			timeMax,
			maxResults: 50,
			singleEvents: true,
			orderBy: 'startTime',
		};

		function convertHours(start, end) {
			const startTime = moment(start.dateTime);
			const endTime = moment(end.dateTime);
			return (endTime.diff(startTime, 'minutes')/60);
		};

		function parseEvents({ start, end, summary }) {
			let meeting = meetings.find(({ description }) => summary.indexOf(description) >= 0);
			if (meeting) {
				return {
					rep,
					repType,
					activityDate: moment(start.dateTime).format("YYYY-MM-DD"),
					recordType: meeting.recordType,
					hours: convertHours(start, end),
					description: meeting.description,
					account: meeting.account,
					type: meeting.type,
				}
			} else {
				let event = summary.split('-');
				let account = accounts.find(({ title }) => title === event[0].trim());
				console.log(summary)
				let eventDescription = summary.split('-')[1].split(';')[1].trim();
				let eventType = summary.split('-')[1].split(';')[0].trim();
			
				if (!account) {
					throw new Error(chalk.red(`Account ${event[0]}not found in config.js. Please check to make sure the account name is included within config.js if intended.`))
					process.exit();
				};
				console.log(eventDescription)
				try {
					let { value, recordType } = types.find(({ title }) => title.toLowerCase().indexOf(eventType.trim().toLowerCase()) >= 0);
						return {
							rep,
							repType,
							activityDate: moment(start.dateTime).format("YYYY-MM-DD"),
							hours: convertHours(start, end),
							description: eventDescription,
							type: value,
							account: (account ? account.value : "CS Internal Activities"),
							recordType,
						}
				} catch (err) {
					throw new Error(chalk.red(`Activity${eventType} not found in config.js. Please check to make sure the activity name is included within config.js if intended.`))
					process.exit();
				};
			}
		};

		calendar.events.list(config, (err, res) => {
			if (err) return console.log(chalk.red('The API returned an error: ' + err));
			const events = res.data.items;
			if (events.length) {
				console.log(chalk.green('Parsing events...'))
				const formatted = events.map(parseEvents);
				fs.writeFileSync(`calendar/weeks/${moment(config.timeMin).format('MM-DD-YYYY')}.json`, JSON.stringify(formatted, null, 4), 'utf8');
				console.log(chalk.green("Events downloaded"));
				cb();
			} else {
				console.log(chalk.green('No upcoming events found.'));
			}
		});
	};
};

module.exports = scrapeGoogleCalendar;
require("dotenv").config();
const fs = require("fs");
const path = require("path");
const { username, password } = process.env;
const Page = require("./helpers/page");
const { blue } = require("chalk");
// const moment = require("moment");

async function logSFHours(timeMin) {
	// Parse downloaded Google Calendar JSON file.
	// const activites = JSON.parse(fs.readFileSync(path.resolve(__dirname, `../calendar/weeks/${moment(timeMin).format('MM-DD-YYYY')}.json`), 'utf8'));

	// Instantiate a new puppateer instance and open headless browser.
	let page = await Page.build();

	// Browse to SF, login using username & password, and naviagte to CS activities page.
	await page.goto("https://qm.lightning.force.com/lightning/o/Customer_Success_Activity__c/list?filterName=Recent");
	await page.login(username, password);
	console.log(blue("Opening `Customer Success Actities` page"));
	await page.waitForSelector('a[title="New"]');
	await page.click('a[title="New"]');

	// // Loop over each activity, and create a new SF entry.
	// for (var i = 0; i < activites.length; i++) {
	// 	console.log(blue(`Creating activity ${i + 1} of ${activites.length}: ${activites[i].description}`));
	// 	await page.selectRecordType(activites[i].recordType);
	// 	await page.waitForSelector("div.slds-section__content textarea[required]");
	// 	await page.createEntry(activites[i]);
	// 	await page.click('button[name="SaveAndNew"]');
	// }

	// Close the puppatere instance.
	// await page.close();
}

module.exports = logSFHours;

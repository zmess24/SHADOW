const prompts = require("prompts"),
	moment = require("moment");

async function queryDate() {
	console.log("STARTING");
	let timeMin = moment().startOf("week").toISOString();
	let timeMax = moment().endOf("week").toISOString();

	let res = await prompts({
		type: "text",
		name: "value",
		message: `Grab current week starting ${moment().startOf("week").format("MM-DD-YYYY")} and ending ${moment()
			.endOf("week")
			.format("MM-DD-YYYY")} (Y/N)?`,
		validate: (value) => (value === "Y" || value === "N" ? true : `Please type Y or N`),
	});

	if (res.value === "N") {
		let { start } = await prompts({
			type: "date",
			name: "start",
			mask: "MM-DD-YYYY",
			message: `Please enter a start date (MM-DD-YYYY)`,
		});

		let { end } = await prompts({
			type: "date",
			name: "end",
			mask: "MM-DD-YYYY",
			message: `Please enter an end date (MM-DD-YYYY)`,
			validate: (date) => (moment(date).startOf("day") < moment(start).startOf("day") ? "End date must be after start date" : true),
		});
		return { timeMin: moment(start).startOf("day").toISOString(), timeMax: moment(end).endOf("day").toISOString() };
	} else {
		return { timeMin, timeMax };
	}
}

module.exports = queryDate;

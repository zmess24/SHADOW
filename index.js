const queryDate = require("./datePrompt"),
	scrapeGoogleCalendar = require("./calendar"),
	logSFHours = require("./headless");

(async function () {
	let { timeMin, timeMax } = await queryDate();
	// await scrapeGoogleCalendar(timeMin, timeMax, async function() {
	//     await logSFHours(timeMin);
	// });
	await logSFHours("");
})();

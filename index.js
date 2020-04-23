var TogglClient = require('toggl-api');
var cp = require('child_process');
var toggl = new TogglClient({ apiToken: process.env.API_TOKEN });

const runCheck = (done) => {
	toggl.getCurrentTimeEntry(function (err, timeEntry) {
		if (err) throw err;
		if (timeEntry === null) {
			console.error('STOP GOOFING OFF!!!');
			cp.exec('StopGoofingOff.png');
		} else {
			console.log('Good Work!!!');
		}
		done();
	});
};

const main = () => {
	runCheck(function () {
		setTimeout(
			function () {
				main();
			}.bind(this),
			1000 * 60 * 5
		);
	});
};

main();

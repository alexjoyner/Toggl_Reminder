const notifier = require('node-notifier');
var TogglClient = require('toggl-api');
var toggl = new TogglClient({ apiToken: process.env.API_TOKEN });
console.log('STARTING BASIC NOTIFIER!');

const MINUTES = 4;

const runCheck = (done) => {
	toggl.getCurrentTimeEntry((err, timeEntry) => {
		if (err) throw err;
		if (timeEntry === null) {
			console.error('STOP GOOFING OFF!!!');
			notifier.notify({
				title: 'STOP GOOFING OFF!',
				message: 'remember to track your time while you work!',
			});
		} else {
			console.log('Good Work!!!');
		}
		done();
	});
};

const main = () => {
	runCheck(() => {
		setTimeout(() => {
			main();
		}, 1000 * 60 * MINUTES);
	});
};

main();

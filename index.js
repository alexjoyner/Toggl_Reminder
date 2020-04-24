var admin = require('firebase-admin');
var TogglClient = require('toggl-api');
var toggl = new TogglClient({ apiToken: process.env.API_TOKEN });

var serviceAccount = require('path/to/serviceAccountKey.json');

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: 'https://toggl-reminder.firebaseio.com',
});

const MINUTES = 4;

const runCheck = (done) => {
	toggl.getCurrentTimeEntry(function (err, timeEntry) {
		if (err) throw err;
		if (timeEntry === null) {
			console.error('STOP GOOFING OFF!!!');
			// implement notification code here
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
			1000 * 60 * MINUTES
		);
	});
};

main();

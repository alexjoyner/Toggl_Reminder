importScripts('https://www.gstatic.com/firebasejs/7.14.1/firebase-app.js');
importScripts(
	'https://www.gstatic.com/firebasejs/7.14.1/firebase-messaging.js'
);

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: 'AIzaSyDk4LHrP6ausGn65gaQNZ_rsIZVpQL8ZeU',
	authDomain: 'toggl-reminder.firebaseapp.com',
	databaseURL: 'https://toggl-reminder.firebaseio.com',
	projectId: 'toggl-reminder',
	storageBucket: 'toggl-reminder.appspot.com',
	messagingSenderId: '419226815336',
	appId: '1:419226815336:web:b1cdf63e25e4c244d1e4dd',
	measurementId: 'G-KTRH7XLGEH',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
	const title = 'Hello World';
	const options = {
		body: payload.data.status,
	};
	return self.ServiceWorkerRegistration.showNotification(title, options);
});

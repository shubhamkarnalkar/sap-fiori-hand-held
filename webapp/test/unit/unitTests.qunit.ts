/* global QUnit */
// https://api.qunitjs.com/config/autostart/
QUnit.config.autostart = false;

// import all your QUnit tests here
void Promise.all([
	import("unit/controller/HomeScreenPage.controller")
]).then(() => {
	QUnit.start();
});
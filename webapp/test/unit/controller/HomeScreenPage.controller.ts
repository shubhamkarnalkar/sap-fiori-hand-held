/*global QUnit*/
import Controller from "handheldd/controller/HomeScreen.controller";

QUnit.module("HomeScreen Controller");

QUnit.test("I should test the HomeScreen controller", function (assert: Assert) {
	const oAppController = new Controller("HomeScreen");
	oAppController.onInit();
	assert.ok(oAppController);
});
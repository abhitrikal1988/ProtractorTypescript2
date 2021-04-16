"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const FirstTest_1 = require("../pageobjects/FirstTest");
cucumber_1.Given('Calculator Application is open', function () {
    // Write code here that turns the phrase above into concrete actions
    protractor_1.browser.ignoreSynchronization = true;
    protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
}),
    cucumber_1.When('Insert two numbers {string} and {string}', function (A, B) {
        // Write code here that turns the phrase above into concrete actions
        let calc = new FirstTest_1.Calculator();
        calc.firsteditbox.sendKeys(A);
        calc.secondeditbox.sendKeys(B);
        protractor_1.browser.sleep(3000);
        protractor_1.element(protractor_1.by.id("gobutton")).click();
    }),
    cucumber_1.Then('Validate the Result', function () {
        // Write code here that turns the phrase above into concrete actions
        console.log("TestCase is passed");
    });

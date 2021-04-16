"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const FirstTest_1 = require("./pageobjects/FirstTest");
describe('First Project', function () {
    it('First Test Case', function () {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
        let calc = new FirstTest_1.Calculator();
        calc.firsteditbox.sendKeys("3");
        calc.secondeditbox.sendKeys("5");
        protractor_1.element(protractor_1.by.id("gobutton")).click();
    });
});

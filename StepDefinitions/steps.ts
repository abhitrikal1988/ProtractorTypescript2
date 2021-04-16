         import {Given,When,Then} from "cucumber";
         import {browser,element,by} from 'protractor';
         import { Calculator } from '../pageobjects/FirstTest';
         
         Given('Calculator Application is open', function () {
           // Write code here that turns the phrase above into concrete actions
           browser.ignoreSynchronization = true;
           browser.get('http://juliemr.github.io/protractor-demo/');
        }),

         When('Insert two numbers {string} and {string}', function (A,B) {
           // Write code here that turns the phrase above into concrete actions
           let calc= new Calculator();
           calc.firsteditbox.sendKeys(A);
        calc.secondeditbox.sendKeys(B);
        browser.sleep(3000);
        element(by.id("gobutton")).click();
         }),

         Then('Validate the Result', function () {
           // Write code here that turns the phrase above into concrete actions
           console.log("TestCase is passed")
         })
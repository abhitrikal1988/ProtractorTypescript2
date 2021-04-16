import {browser, element, by} from 'protractor';
import { Calculator } from './pageobjects/FirstTest';

describe('First Project',function(){
    it('First Test Case',function(){
        browser.ignoreSynchronization = true;
        browser.get('http://juliemr.github.io/protractor-demo/');

        let calc=new Calculator();

        calc.firsteditbox.sendKeys("3");
        calc.secondeditbox.sendKeys("5");
        
        element(by.id("gobutton")).click();
        

    })
})
    
 
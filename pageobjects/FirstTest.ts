import { element, ElementFinder,by } from "protractor";

export class Calculator {

    firsteditbox:ElementFinder;
    secondeditbox:ElementFinder;

    constructor(){
        this.firsteditbox=element(by.model('first'));
        this.secondeditbox=element(by.model('second'));
    }
}
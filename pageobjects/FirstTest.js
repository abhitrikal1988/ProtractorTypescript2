"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
const protractor_1 = require("protractor");
class Calculator {
    constructor() {
        this.firsteditbox = protractor_1.element(protractor_1.by.model('first'));
        this.secondeditbox = protractor_1.element(protractor_1.by.model('second'));
    }
}
exports.Calculator = Calculator;

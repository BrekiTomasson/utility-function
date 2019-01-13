"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UtilityFunction {
    constructor(...utilities) {
        this.value = {
            average: 0,
            sum: 0
        };
        this.reset = () => {
            this.value = {
                average: 0,
                sum: 0
            };
            this.utilities = [];
        };
        this.utilities = [];
        this.add = (possibility, value) => {
            this.utilities.push({ possibility, value });
            this.calculate();
        };
        this.calculate = () => {
            const tmp = new Array();
            this.value = {
                average: 0,
                sum: 0
            };
            this.utilities.forEach((utility) => {
                tmp.push((utility.possibility / 100) * utility.value);
            });
            const sum = tmp.reduce(function (a, b) { return a + b; });
            this.value = {
                sum: sum,
                average: sum / tmp.length
            };
        };
    }
}
exports.UtilityFunction = UtilityFunction;

"use strict";
function calculate(x, operator, y) {
    let result = undefined;
    switch (operator) {
        case "+":
            result = x + y;
            break;
        case "-":
            result = x - y;
            break;
        case "*":
            result = x * y;
            break;
        case "/":
            result = x / y;
            break;
        default:
            break;
    }
    const formattedResult = result !== undefined ? result.toFixed(2) : '';
    return formattedResult;
}
console.log(calculate(5, "+", 10));

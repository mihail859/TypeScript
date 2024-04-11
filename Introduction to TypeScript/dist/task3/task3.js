"use strict";
const mathOperations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
    '%': (a, b) => a % b
};
const operationTuple = [1, 1, "+"];
console.log(mathOperations[operationTuple[2]](operationTuple[0], operationTuple[1]));

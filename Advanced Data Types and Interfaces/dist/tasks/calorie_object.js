"use strict";
// Input
const input = ['Yoghurt', '48', 'Rise', '138', 'Apple', '52', 'Yoghurt', '10000'];
//Output 
const outputObj = {};
// Solving logic
for (let index = 0; index < input.length; index += 2) {
    const product = input[index];
    const quantity = Number(input[index + 1]);
    if (outputObj.hasOwnProperty(product)) {
        outputObj[product] += quantity;
    }
    else {
        outputObj[product] = quantity;
    }
}
console.log(outputObj);

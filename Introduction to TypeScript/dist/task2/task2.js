"use strict";
function findLargestNumber(arr) {
    let largest = null;
    largest = arr.reduce((a, b) => Math.max(a, b));
    return largest;
}
const testCaseArr = [5, 6, 9, 7];
console.log(findLargestNumber(testCaseArr));

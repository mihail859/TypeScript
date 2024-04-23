"use strict";
class Box {
    data;
    constructor(data) {
        this.data = data;
    }
    toString() {
        return `${this.data} is of type ${typeof this.data}`;
    }
}
const testNumber = new Box(4);
console.log(testNumber.toString());
const testArray = new Box(["a", "B", "C"]);
console.log(testArray.toString());

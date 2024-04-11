"use strict";
class Cat {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    meow() {
        console.log(`${this.name}, age: ${this.age} meows`);
    }
}
const input = ['Candy 1', 'Poppy 3', 'Nyx 2'];
for (let index = 0; index < input.length; index++) {
    const element = input[index];
    const catName = element.split(' ')[0];
    const catAge = Number(element.split(' ')[1]);
    const currentCat = new Cat(catName, catAge);
    currentCat.meow();
}

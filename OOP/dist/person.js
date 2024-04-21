"use strict";
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showDetails() {
        console.log(`Name: ${this.name} - ${this.age} years old`);
    }
}
const person = new Person("Paolena", 18);
person.showDetails();

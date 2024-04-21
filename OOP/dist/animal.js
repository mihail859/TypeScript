"use strict";
class Animal {
    eat() {
        console.log("eating");
    }
}
class Cat extends Animal {
    meow() {
        console.log("Meow");
    }
}
class Dog extends Animal {
    bark() {
        console.log("Bark");
    }
}
const cat = new Cat();
cat.eat();
cat.meow();
console.log("-------------");
const dog = new Dog();
dog.bark();
dog.eat();

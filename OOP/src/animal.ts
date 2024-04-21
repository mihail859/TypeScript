class Animal{
    eat(): void{
        console.log("eating")
    }
}

class Cat extends Animal{
    meow(): void{
        console.log("Meow")
    }
}

class Dog extends Animal{
    bark(): void{
        console.log("Bark")
    }
}

const cat: Cat = new Cat()
cat.eat();
cat.meow();

console.log("-------------")
const dog: Dog = new Dog()
dog.bark();
dog.eat();
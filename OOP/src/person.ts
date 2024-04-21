class Person{
    public name: string
    public age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    showDetails(): void {
        console.log(`Name: ${this.name} - ${this.age} years old`);
    }
}

const person: Person = new Person("Paolena", 18);
person.showDetails();
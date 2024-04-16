// interface
interface PersonInformation{
    firstName: string;
    lastName: string;
    age?: number;

}

// class
class Person implements PersonInformation{
    firstName = "";
    lastName = "";
    age =  0;

    constructor(firstName: string, lastName: string, age: number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

}

// input : "Peter", "Pan", 20
const person = new Person("Peter", "Pan", 20)
console.log(person)
console.log(person.firstName, " - ", person.lastName, " - ", person.age)

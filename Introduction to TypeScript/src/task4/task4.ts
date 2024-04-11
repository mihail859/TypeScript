class Cat{
    public name: string;
    public age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    meow(): void{
        console.log(`${this.name}, age: ${this.age} meows`);
    }
}



const input: string[] = ['Candy 1', 'Poppy 3', 'Nyx 2'];
for (let index = 0; index < input.length; index++) {
    const element: string = input[index];

    const catName: string = element.split(' ')[0];
    const catAge: number = Number(element.split(' ')[1]);

    const currentCat: Cat = new Cat(catName, catAge);
    currentCat.meow();

}
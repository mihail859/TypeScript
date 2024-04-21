"use strict";
// class Car {
//     public brand: string;
//     public model: string;
//     public hp: number;
//     constructor(brand: string, model: string, hp: number) {
//         this.brand = brand;
//         this.model = model;
//         this.hp = hp;
//     }
//     carInfo(): void{
//         console.log(`The car is: ${this.brand} ${this.model} - ${this.hp} HP.`)
//     }
// }
// const newCar: Car = new Car("Mercedes", "GLK", 280);
// newCar.carInfo();
class Car {
    _brand;
    _model;
    _hp;
    constructor(brand, model, hp) {
        this._brand = brand;
        this._model = model;
        this._hp = hp;
    }
    get brand() {
        return this._brand;
    }
    set brand(newBrand) {
        this._brand = newBrand;
    }
    get model() {
        return this._model;
    }
    set model(newModel) {
        this._model = newModel;
    }
    get hp() {
        return this._hp;
    }
    set hp(newHp) {
        this._hp = newHp;
    }
    print() {
        console.log(`The car is: ${this._brand} ${this._model} - ${this._hp} HP.`);
    }
}
const car = new Car("Subaru", "Imperia", 320);
car.print();
car.hp = 310;
car.print();
console.log(car.model);

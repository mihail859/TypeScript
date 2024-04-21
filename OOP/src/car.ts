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

class Car{
    private _brand: string;
    private _model: string;
    private _hp: number;

   constructor(brand: string, model: string, hp: number) {
        this._brand = brand;
        this._model   = model;
        this._hp = hp;
   }

   get brand(): string {
    return this._brand;
   }
   set brand(newBrand: string) {
    this._brand = newBrand;
   }

   get model(): string {
    return this._model;
   }

   set model(newModel: string) {
    this._model = newModel;
   }

   get hp(): number {
    return this._hp;
   }

   set hp(newHp: number) {
    this._hp = newHp;
   }

   print(): void {
    console.log(`The car is: ${this._brand} ${this._model} - ${this._hp} HP.`)
   }
}

const car: Car = new Car("Subaru", "Imperia", 320);
car.print();
car.hp = 310;
car.print();
console.log(car.model)
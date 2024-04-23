class Box<T>{
    data: T;
    
    constructor(data: T) {
        this.data = data;
    }

    toString(): string {
        return `${this.data} is of type ${typeof this.data}`;
    }
}

const testNumber: Box<number> = new Box<number>(4);
console.log(testNumber.toString());

const testArray: Box<string[]> = new Box<string[]>(["a", "B", "C"]);
console.log(testArray.toString());
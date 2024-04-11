interface MathOperations {
    [key: string]: (a: number, b: number) => number;
}

const mathOperations: MathOperations = {
    '+': (a: number, b: number): number => a + b,
    '-' : (a: number, b: number): number => a - b,
    '*': (a: number, b: number): number => a * b,
    '/': (a: number, b: number): number => a / b,
    '%': (a: number, b: number): number => a % b
}

const operationTuple: [number, number, string] = [1, 1, "+"];
console.log(mathOperations[operationTuple[2]](operationTuple[0], operationTuple[1]));

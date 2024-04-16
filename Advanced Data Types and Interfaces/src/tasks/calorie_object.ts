// Input
const input: string[] = ['Yoghurt', '48', 'Rise', '138', 'Apple', '52', 'Yoghurt', '10000'];

//Interfaces:
interface ProductInterface {
    [key: string]: number;
}
//Output 
const outputObj: ProductInterface = {}

// Solving logic
for (let index = 0; index < input.length; index+=2) {
    const product: string = input[index];
    const quantity: number = Number(input[index+1]);
    if (outputObj.hasOwnProperty(product)) {
        outputObj[product] += quantity;
    } else{
        outputObj[product] = quantity;
    }
}

console.log(outputObj)
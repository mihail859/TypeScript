// Input
const input: string[] = ['Yoghurt', '48', 'Rise', '138', 'Apple', '52'];

//Interfaces:
interface ProductInterface {
    name: string;
    quantity: number;
}

// Solving logic
for (let index = 0; index < input.length; index++) {
    const element = input[index];
    console.log(element)
}

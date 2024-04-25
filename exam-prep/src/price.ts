const inputData: string[] = ['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10'];


interface TownPriceObj {
    [town: string]: number;
}

interface ProductObject {
    [key: string]: TownPriceObj
}


function findLowestPrices(data: string[]){
    const objFruits: ProductObject = {};

    for (let row of data) {
        let splitData: string[] = row.split(" | ")
        let town: string = splitData[0];
        let product: string = splitData[1];
        let price: number = Number(splitData[2]);

        if (!objFruits.hasOwnProperty(product)) {
            objFruits[product] = { [town]: price }
        }
        else{
            objFruits[product][town] = price;
        }

    }
    console.log(objFruits);
    
}


findLowestPrices( inputData )
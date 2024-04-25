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

interface lowestPriceTown {
    town: string;
    price: number;
}

interface lowestPriceObj {
    [key: string]: lowestPriceTown
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
    // console.log(objFruits);

    let lowestPrices: lowestPriceObj = {};
    for (let prod in objFruits){
        let lowest = Infinity;
        let townName = '';
        for (let town in objFruits[prod]){
            if (objFruits[prod][town] < lowest){
                lowest = objFruits[prod][town];
                townName = town
            }
        }
        lowestPrices[prod] = { town: townName, price: lowest}
    }
    
    for (let product in lowestPrices) {
        console.log(`${product} -> ${lowestPrices[product].price} (${lowestPrices[product].town})`)
        
    }
    
}


findLowestPrices( inputData )
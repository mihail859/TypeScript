"use strict";
const inputData = ['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'];
function findLowestPrices(data) {
    const objFruits = {};
    for (let row of data) {
        let splitData = row.split(" | ");
        let town = splitData[0];
        let product = splitData[1];
        let price = Number(splitData[2]);
        if (!objFruits.hasOwnProperty(product)) {
            objFruits[product] = { [town]: price };
        }
        else {
            objFruits[product][town] = price;
        }
    }
    // console.log(objFruits);
    let lowestPrices = {};
    for (let prod in objFruits) {
        let lowest = Infinity;
        let townName = '';
        for (let town in objFruits[prod]) {
            if (objFruits[prod][town] < lowest) {
                lowest = objFruits[prod][town];
                townName = town;
            }
        }
        lowestPrices[prod] = { town: townName, price: lowest };
    }
    for (let product in lowestPrices) {
        console.log(`${product} -> ${lowestPrices[product].price} (${lowestPrices[product].town})`);
    }
}
findLowestPrices(inputData);

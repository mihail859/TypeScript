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
        //objFruits[product][town] = price;
    }
    console.log(objFruits);
}
findLowestPrices(inputData);

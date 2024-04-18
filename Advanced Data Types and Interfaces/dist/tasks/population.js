"use strict";
// Input
const townsInfo = ['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'];
const towns = {};
//? Logic
for (let t of townsInfo) {
    const splitData = t.split(" <-> ");
    const name = splitData[0];
    const people = Number(splitData[1]);
    console.log(typeof people, people);
    if (towns.hasOwnProperty(name)) {
        towns[name] += people;
    }
    else {
        towns[name] = people;
    }
}
// Output: 
console.log(towns["New York"]);

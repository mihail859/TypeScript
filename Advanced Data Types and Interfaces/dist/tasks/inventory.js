"use strict";
// input:
const data = [
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara',
    'Hes / 5 / Desolator, Sentinel, Antara, Shadow'
];
const heroObj = {};
// Logic
for (let row of data) {
    const splitInformation = row.split(" / ");
    const name = splitInformation[0];
    const level = Number(splitInformation[1]);
    const items = splitInformation[2].split(", ");
    if (heroObj.hasOwnProperty(name)) {
        if (level !== undefined) {
            heroObj[name].level = level;
        }
        items.forEach(item => {
            heroObj[name].items.push(item);
        });
    }
    else {
        heroObj[name] = {
            level: level,
            "items": items
        };
    }
}
const newObjEntries = Object.entries(heroObj).sort((a, b) => a[0].localeCompare(b[0]));
const sortedObj = Object.fromEntries(newObjEntries);
console.log(sortedObj);

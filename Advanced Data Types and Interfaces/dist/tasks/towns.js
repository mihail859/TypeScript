"use strict";
// Input
let inputData = ['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'];
//? class Town
class Town {
    town = "";
    latitude = "";
    longitude = "";
    constructor(town, latitude, longitude) {
        this.town = town;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}
// Creating town Objects
for (let town of inputData) {
    let dataSplit = town.split(" | ");
    let name = dataSplit[0];
    let latitude = dataSplit[1];
    let longitude = dataSplit[2];
    const newObj = new Town(name, latitude, longitude);
    console.log(newObj);
}

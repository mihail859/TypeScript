// Input
let  inputData: string[] = ['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'];


//Output
// { town: 'Sofia', latitude: '42.70', longitude: '23.33' }
// { town: 'Beijing', latitude: '39.91', longitude: '116.36' }

//!interface Town
interface TownInterface{
    town: string;
    latitude: string;
    longitude: string;
}

//? class Town
class Town implements TownInterface{
    town = "";
    latitude= "";
    longitude = "";
    constructor (town: string, latitude: string, longitude: string){
        this.town = town;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}

// Creating town Objects
for (let town of inputData){
    let dataSplit = town.split(" | ")
    let name: string = dataSplit[0];
    let latitude: string = dataSplit[1];
    let longitude: string = dataSplit[2];

    const newObj: Town = new Town(name, latitude, longitude)
    console.log(newObj)
}
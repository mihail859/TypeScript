// input:
const data: string[] =  [
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara',
    'Hes / 5 / Desolator, Sentinel, Antara, Shadow'
]

// interfaces
interface heroObjInterface{
    [key: string]: HeroData
}

interface HeroData{
    level: number;
    items: string[]
}

const heroObj: heroObjInterface = {}

// Logic
for (let row of data){
    const splitInformation: string[] = row.split( " / " );
    const name: string = splitInformation[0];
    const level: number = Number(splitInformation[1]);
    const items: string[] = splitInformation[2].split(", ")

    if (heroObj.hasOwnProperty(name)){
        if (level !== undefined){
            heroObj[name].level = level;
        }
       items.forEach(item =>{
        heroObj[name].items.push(item);
       })
    }else{
        heroObj[name] = {
            level: level,
            "items": items
        }
    }
}

const newObjEntries = Object.entries(heroObj).sort(( a, b ) => a[0].localeCompare(b[0]))
const sortedObj: heroObjInterface = Object.fromEntries(newObjEntries);
console.log(sortedObj)

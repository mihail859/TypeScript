// input:
const data: string[] =  [
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]

// interfaces
interface heroObjInterface{
    [key: string]: HeroData
}

interface HeroData{
    level: number;
    items: string[] | null
}

const heroObj: heroObjInterface = {}

// Logic
for (let row of input){
    console.log(row)
}
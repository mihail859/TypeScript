import { Cloth } from "./Cloth";

export class Magazine{

    private type: string;
    private capacity: number;
    private clothes: Cloth[]

    constructor(type: string, capacity: number) {
        this.type = type;
        this.capacity = capacity;
        this.clothes = [];
    }

    addCloth(cloth: Cloth): void{
        if (this.clothes.length < this.capacity){
            this.clothes.push(cloth);
        }
    }

    removeCloth( color: string ): boolean {
        let index = this.clothes.findIndex(c => c.color === color);

        if (index !== -1){
            this.clothes.splice(index, 1);
            return true;
        }
        return false;
    }

    getSortedClothes(): Cloth[] {
        let sorted = this.clothes.sort((a, b) => a.size - b.size);

        return sorted;
    }
    
    getSmallestCloth(): Cloth{
        if (!this.clothes.length){
            return { } as Cloth;
        }

        if (this.clothes.length === 1){
            return this.clothes[0];
        }

        const smallestCloth = this.getSortedClothes()[0];
        return smallestCloth;
    }

    getCloth(color: string): Cloth{
        const searchedCloth = this.clothes.find(cl => cl.color === color);
        return searchedCloth!;
    }

    getClothCount(): number{
        return this.clothes.length;
    }

    report(): string{
        const sortClothes = this.getSortedClothes();
        const clothesForReport = sortClothes.map((c) => `Product: ${c.type} with size ${c.size}, color ${c.color}`).join("\n");

    const report = `${this.type} magazine contains:\n${clothesForReport}`;
    return report;
    }

}
function findLargestNumber(arr: number[]) : number{
    let largest: null | number | string = null;
    largest = arr.reduce((a,b) => Math.max(a, b ))
    return largest;

}

const testCaseArr: number[] = [5, 6, 9, 7];
console.log(findLargestNumber(testCaseArr))
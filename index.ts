function sumOfArr(arr: number[]): number 
{
    let sum:number;
    sum = arr.reduce((acc, curr) => acc + curr, 0);
    return sum
}
console.log(sumOfArr([1, 2, 3, 4, 5])); // Output: 15

function returnType<T> (val: T): T {
    return val;
}
const numValue: number = returnType<number>(100);
const strValue: string = returnType<string>("Amna");
const boolValue: boolean = returnType<boolean>(true);
const arrValue: number[] = returnType<number[]>([1, 2, 3, 4]);

console.log(`Number Value: ${numValue}`);
console.log(`String Value: ${strValue}`);
console.log(`Boolean Value: ${boolValue}`);
console.log(`Array Value: ${arrValue}`);
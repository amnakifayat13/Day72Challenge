
// Generics Function 
function returnTypeEx <T> (val: T): T {
    return val;
}
console.log(returnTypeEx <number> (100));
console.log((returnTypeEx< string> ("Amna")));
// Arrow function
const returnTypeArrowSyntax = <T>(val: T): T => val;
  
  console.log(returnTypeArrowSyntax<number>(100)); 
  console.log(returnTypeArrowSyntax<string>("Amna"));

  //Generic Function testType
  function testType <T> ( val : T): string {
    return ` The value is ${val} and Type is ${typeof val}`
  }
console.log(testType<number> (100));
console.log((testType<string> ("Amna")));
//Generics Multiple Type
function multipleType<T, S> (val1: T, val2: S): string{
    return `The first value is ${val1} and Second value is ${val2}`
}

console.log(multipleType<string, number> ("Amna", 13));
console.log(multipleType<string, boolean>("Kifayat", true));





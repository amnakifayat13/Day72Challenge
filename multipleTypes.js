// Generics Function 
function returnTypeEx(val) {
    return val;
}
console.log(returnTypeEx(100));
console.log((returnTypeEx("Amna")));
// Arrow function
var returnTypeArrowSyntax = function (val) { return val; };
console.log(returnTypeArrowSyntax(100));
console.log(returnTypeArrowSyntax("Amna"));
//Generic Function testType
function testType(val) {
    return " The value is ".concat(val, " and Type is ").concat(typeof val);
}
console.log(testType(100));
console.log((testType("Amna")));
//Generics Multiple Type
function multipleType(val1, val2) {
    return "The first value is ".concat(val1, " and Second value is ").concat(val2);
}
console.log(multipleType("Amna", 13));
console.log(multipleType("Kifayat", true));

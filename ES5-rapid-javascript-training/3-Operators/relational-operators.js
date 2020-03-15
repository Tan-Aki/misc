// < 
// > 
// <=
// >=

console.log("alpha" > "beta") // false    comparison of ASCI values. b has a higher value than a 
console.log("alpha" < "beta") // true
console.log("alphaaaaaa" < "beta") // true
console.log("alpha" > "alph") // true in terms of lengh
console.log("Alpha" > "beta") // false en ASCI  A B C D a b c d, et plus on avance, plus les lettres ont du "poid" // http://www.asciitable.com/
console.log("alpha" > "Beta") // true
console.log("alpha".toLocaleLowerCase() > "Beta".toLocaleLowerCase()) // false

console.log('42' < 55 ) // true
console.log('42' < '142') // false, comparaison as strings and 1 comes before 4 in the ascii table, 4 has more "weight"
console.log(`NAN ${NaN < 5}`); // false
console.log(`NAN ${NaN > 5}`); // false






 
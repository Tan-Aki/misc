// let quantity = 2;
// let price = 0.99;

// console.log(quantity * price);
// console.log(typeof price);


// let oct = 071; // octo
// console.log(oct);

// oct should be avoided

let oct = 088; // octo doesnt exist so it will display 88
console.log(oct);

let hex = 0x10;
console.log(hex);

let dec = 3.2e4 // e = puissance de 10 =  32000
console.log(dec);

let dec2 = 3.2e-4 // e- = puissance de -10 =  0.00032
console.log(dec2);


console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE * 2);

let n = Infinity;
console.log(typeof n);

let n2 = -Infinity;
console.log(typeof n2);

console.log(Number.POSITIVE_INFINITY + ' ' + Number.NEGATIVE_INFINITY);



let count;
let price = 5.00;

console.log(price / count);

console.log(typeof NaN); // is a number

let n3 = NaN;
if (isNaN(n3))
    console.log("Nan!"); // true
else
    console.log("is a Number!");

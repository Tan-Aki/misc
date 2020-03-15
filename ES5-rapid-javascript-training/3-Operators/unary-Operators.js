// var level = 5;
// level++;
// console.log(level); // 6



let level = 5;
let nextLevel = level++;  //incrémenté après l'assignation
let nextlevel2 = ++level; // incrémenté avant l'assignation
console.log(nextLevel, nextlevel2);  // 5,7

// same with --


// let lev = 5;
// let base = 10;
// let nextLev = level-- * base;  // level décrémente après que la ligne soit "complétée"
// console.log(nextLev); // 50 


let lev = 5;
let base = 10;
let nextLev = --level * base;  // level décrémente avant que la ligne soit "complétée"
console.log(nextLev); // 40 


var lev2;
var lev3 = null;
console.log(++lev2, ++lev3) // undefined, 1



var value = 9;
value += value;
console.log(value)

var value = 9;
value = -value;
console.log(value) //-9

var value = -9;
value = -value;
console.log(value) //9



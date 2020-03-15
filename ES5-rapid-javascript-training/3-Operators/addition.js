var total = 5.1 + 3.3;
console.log(total); // 8.3999999
console.log(total.toFixed(2));

var id = "PRD" + 2000;
console.log(id); // PRD2000

var id2 = "200" + "500";
console.log(id2); // 200500


var id3 = 200 + "500";
console.log(id3); // 200500

let id4 = 2000 + undefined;
console.log(id4); // undefined

let id7 = 2000 + null;
console.log(id7); // 2000


let id5 = "PRD" + undefined;
console.log(id5); // PRDundefined


let id6 = "PRD" + null;
console.log(id6); // PRDnull


let id8 = 2000 + NaN;
console.log(id8); // NaN


let id9 = "PRD" + NaN;
console.log(id9); // PRDNaN



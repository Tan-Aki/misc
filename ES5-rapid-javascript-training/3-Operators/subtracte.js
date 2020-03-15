let total = 3.8 - 2.1;
console.log(total);  // 1.699999
console.log(total.toFixed(3));  // 1.700


let total2 = "300" - "200";
console.log(total2); // 100 


let total3 = "PRD300" - "PRD200";
console.log(total3); // NaN


let total4 = 300- undefined;
console.log(total4); // NaN 


let total5 = 300- null;
console.log(total5); // 300

let total7 = 300- NaN;
console.log(total7); //  NaN

let obj = {
    valueOf : () => {return 100;},
};
let total6 = 300 - obj;
console.log(total6);


let total8 = 300- "";
console.log(total8); //  300





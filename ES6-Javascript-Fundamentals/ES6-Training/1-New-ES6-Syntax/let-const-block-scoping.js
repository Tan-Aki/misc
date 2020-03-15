'use strict';

function updateProductID() {
    productID = 12;
}
let productID = null;
updateProductID();
console.log(productID);

let prodId = 42;
for (let prodId= 0; prodId < 10; prodId++){ // declaring another prodId in  the "for" scope, entre parenthèses

}
console.log(prodId); // 42 


let updateFunctions = [];
for (var i = 0; i<2; i++){
    updateFunctions.push(function () {return i;});
}
console.log(updateFunctions[0]()); // 2  through closures, i = 2. à ce moment on on appelle la function, var i est accessible globallement due to hoisting, et est égal à 2 


let updateFunctions2 = [];
for (let i = 0; i<2; i++){
    updateFunctions2.push(function () {return i;});
}
console.log(updateFunctions2[0]()); // 0, with the let keyword, à ce moment du code, le i n'est accessible que sa block scope, il n'est pas accessible globallement, donc on prend la valeur de i au moment ou la fonction a été insérée dans le tableau.



// for (let toto = 0; toto < 10; toto++){

// }
// console.log(toto); // breaks, toto is not defined

for (var tata = 0; tata < 10; tata++){
    for (var tutu = 0; tutu < 10; tutu++){
        var myFn = () => {
            var solo = 10;
        }
    }
}
console.log(tata); // tata is defined thanks to hoisting
console.log(tutu);
myFn();
//console.log(solo); // solo is not defined, var is function scoped 
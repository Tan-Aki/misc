// HOISTING
// hoist = hisser
// pass 1, all declarations are located and identifiers are know by the compiler
// all variables are set to undefined during the pass 1
// pass 2, assignation des valeurs dans les variables puis execution du code, dans l'ordre


// console.log(productId);
// var productId = "9000"; // undefined

// let total = price * quantity;
// let price = 3.00;
// let quantity = 5;

// console.log(total);

// showProduct();

// function showProduct () {
//     console.log('showing a produ');
// }
// works

showProduct();

var showProduct = function showProduct () {
    console.log('showing a produ');
}
// doesnt work because of initilazation dans la deuxième passe




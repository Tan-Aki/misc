//'use strict';   // oblige le typage

var orderId;
console.log(orderId);

orderId = 9001;
console.log(orderId);

orderId = 'Ord-9001';
console.log(orderId);



// orderIdGlobal = 9001; // erreur car oblige le typage
// console.log(orderId);


orderId = 9001;
console.log( "orderId = " + typeof orderId);


orderId = 'Ord-9001';
console.log( `orderId = ${typeof orderId}`);

var isActive = true;
console.log( `isActive = ${typeof isActive}`);

var notTyped;
console.log( `notTyped = ${typeof notTyped}`);


var order = {
    orderId2: 9001,
    isActive2: true,    
}
console.log(typeof order);

var cancelledOrders = [9001,9002,9003];
console.log(typeof cancelledOrders);

var order = null;
console.log(typeof order);

let cancelOrder = (orderId) => {};
console.log (typeof cancelOrder); 





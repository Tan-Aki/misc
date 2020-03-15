'use strict';


var price = 5.99, quantity = 30;
var productView = {
    price,
    quantity,
    myOGCalculateValue: function () {
        return this.price * this.quantity;
    },
    calculateValue() {
        return this.price * this.quantity;
    },
};

console.log(productView); // { price: 5.99, quantity: 30 }
console.log(productView.calculateValue()); // 179.70000000000002
console.log(productView.myOGCalculateValue()); // 179.70000000000002


var method = 'dynamic-field';
var productView = {
    [method + '-001']() {    // we can specify a variable as a property if we use brackets
        console.log('in a method');
    }
};
productView['dynamic-field-001'](); // we need to call the property using the brackets 
// productView.dynamic-field-001(); // doesnt' work
productView[method + '-001'](); // we need to call the property using the brackets 
productView[`${method}-001`](); // we need to call the property using the brackets 


var ident = 'productId';
var productView = {
    get [ident] () {return true;},
    set [ident] (value) { }
};

console.log(productView.productId); // true


'use strict'

var invoice = {
    number : 123,
    process : function() {
        console.log(this);
    }
};

invoice.process();


var invoice2 = {
    number : 123,
    process : () => {
        let toto = 1;
        console.log(this);
    }
};

invoice2.process();


(function () {console.log(this);})();
(() => console.log(this))();


var me = {
    name : 'Tyler',
    sayName : () => { console.log(this.name)}
};

me.sayName(); // undefined because arrow function get the this from parent object, in this case the global scope

var me = {
    name : 'Tyler',
    sayName : function () { console.log(this.name)},
};

me.sayName();


var invoice2 = {
    number : 123,
    process : function () {
       return () => console.log(this.number);
    }
};

var newInvoice = {
    number : 456,
};

invoice2.process().bind(newInvoice)(); // 123      we cannot bind the this with arrow functions
invoice2.process().call(newInvoice)(); // 123      we cannot bind or call the this with arrow functions

var getPrice = () => 5.99;
console.log(getPrice.hasOwnProperty('prototype')); // false, arrow functions don't have prototypes


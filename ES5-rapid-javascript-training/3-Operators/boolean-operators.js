var value = !true; // false
console.log(value);

var value = !99;  // false
var value = !0;  // true
var value = !"";  // true
var value = !"A";  // false
var value = !" ";  // false
var value = !new Object(); // false an object is true
var value = !null // true
var value = !undefined // true
var value = !NaN //true

var value = !!false //  the first ! will negate and transform the value into a boolean, the second ! will unnegate . So basically, !! transforms into a boolean here it's going to be false


var value = true && true //true
var value = true && false //false

var obj = {
    calc : 'Logical AND'
};
var value = obj && 99; // 99 in JS, if the first operand is an object, the second operand is always going to be returned
var value = obj && obj;
console.log(value); //  { calc: 'Logical AND' }  same rule as above
var value = true && obj; // { calc: 'Logical AND' }  same rule as above but with the true statement
var value = null && 99; // si un des opérateurs est null => null , same with undefined or NaN
var value = null && 'z'; // same as above

var productId = 5;
var value = false && ++productId;  
console.log(productId); // 5    on ne fait même la deuxième opération, on s'arrête à false





var value = true || true; // OU  : true

var obj = {
    calc : 'Logical OR'
};
var value = obj || 99; // with and OR, in JS, if the first operand is an object, the object is always going to be returned
console.log(value); // { calc: 'Logical OR' }
var value = false || 99;  // 99  

///////////////////////////////////////////////////////////////
//IMPORTANT

var obj = {
    calc : 'default',
};
var obj2 = {
    calc : 'user',
};

var value = obj || obj2;  // value =   obj   car obj est un objet valide, sinon on retourne obj2
///////////////////////////////////////////////////////////////

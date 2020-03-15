if (true == 1)  // true
    console.log('true')
else
    console.log('false'); 
    
if (true == 2) // false 
    console.log('true')
else
    console.log('false');

console.log(true == 2 );

console.log(false == 0)  // true

console.log(42 == '42') // true

var obj = {
    valueOf : () => {return 42;},
}
42 == obj // true


var obj = {
    toString : () => {return 42;},
};
42 == obj // true


var obj = {
    name : 'Trigger',
};
var obj2 = {
    name : 'Trigger',
};
obj == obj2 // false
obj == obj // true 

obj2 = obj
obj == obj2 // true

null == undefined // true

undefined == 0 // false
null == 0 // false

NaN == NaN // false  because Nan is number




42 != 'forty-two' // true


55 === '55' // false   === is type and value the same ? no

55 === 55 // true

false === 0 // false

null === undefined // false

console.log(55 !== '55') // true
console.log(55 != '55') // false



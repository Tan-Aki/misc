var entries = new Array('Trains', 'Plains', 'Automobiles');
console.log(entries instanceof Array);  // here instanceof checks if it is Array // true


var entries = new Array('Trains', 42 ,true);
console.log(entries instanceof Array);  // here instanceof checks if it is Array // true



var entries = Array('Trains', 42 ,true);
console.log(entries instanceof Array);  // we can remove the "new" keyword . here instanceof checks if it is Array // true



var entries = ['Trains', 42 ,true];
console.log(entries instanceof Array);  // we can use the brackets to create an array . here instanceof checks if it is Array // true


var entries = ['Trains', 42 ,true];
console.log(entries[0]);  // Trains

console.log([,...entries,entries[0]]); // destructuration


var entries = ['Trains', 42 ,true];
console.log(entries[3]);  // undefined


var entries = new Array(5);
console.log(entries);  // [5 empty items]
console.log(entries.length); // 5


var entries = new Array("5");
console.log(entries);   // ["5"]
console.log(entries.length); //1

var entries = [];
console.log(entries);   // []
console.log(entries.length); //0


var entries = [,,,];
console.log(entries);   // [3 empty items]   // 4 empty items in IE8
console.log(entries.length); //3  // 4 in IE8


var entries = new Array('Trains', 'Plains', 'Automobiles');
entries.length = 10
console.log(entries);   // [ 'Trains', 'Plains', 'Automobiles', <7 empty items> ]
console.log(entries.length); //10 


var entries = new Array('Trains', 'Plains', 'Automobiles');
entries.length = 1
console.log(entries);   // [ 'Trains']
console.log(entries.length); //1

var entries = ['Trains', 'Plains', 'Automobiles'];
entries[2] = 'car';
console.log(entries);   // [ 'Trains', 'Plains', 'car' ]


var entries = ['Trains', 'Plains', 'Automobiles'];
entries[42] = 'car';
console.log(entries);   //[ 'Trains', 'Plains', 'Automobiles', <39 empty items>, 'car' ]


var entries = ['Trains', 'Plains', 'Automobiles'];
entries[entries.length] = 'car';  // 
entries.push('toto');
console.log(entries);   //[ 'Trains', 'Plains', 'Automobiles', 'car','toto']

entries.pop();
console.log(entries);   //[ 'Trains', 'Plains', 'Automobiles', 'car']
console.log(entries.toString());   // Trains,Plains,Automobiles,car

var ratings = [5,2,4]; 
console.log(ratings.valueOf()); // [5,2,4]

var ratings = ["5",2,4]; 
console.log(ratings.valueOf()); // [ '5', 2, 4 ]

var ratings = [5,2,4]; 
console.log(ratings.join('|')); // 5|2|4

























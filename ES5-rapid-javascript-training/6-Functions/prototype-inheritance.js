// let toto = {
//     name : 'Toto',
//     age : 28,
// };

// let toto2 = new Object();

// let toto3 = Object.create(toto);

// console.log(toto3.name);

// let Toto = function(name,age){
//     this.name = name;
//     this.age = age;
// }

// Toto.prototype.getName = function (){
//     return this.name;
// }

// let toto4 = new Toto('Tan', 27);

// console.log(toto4.name);
// console.log(toto4.getName());

// console.log(Toto.prototype);
// console.log(Object.prototype);
// console.log(toto4.__proto__);

// console.log(Object);

// let toto = {};

// console.log(toto.__proto__.__proto__);
// console.log (toto.__proto__ === Object.prototype);
// console.log ( Object.prototype);

'use strict';

let Mammal = function() {
	this.name = 'toto';
};

let Human = function() {};

let Child = function() {};

Human.prototype = new Mammal();
Child.prototype = new Human();

Mammal.prototype.eat = function() {
	console.log('I eat.');
};

Mammal.prototype.setName = function(name) {
	this.name = name;
};

Human.prototype.speak = function() {
	console.log('I speak.');
};

Child.prototype.play = function() {
	console.log('I play.');
};

let tan = new Child();
tan.eat();
console.log(tan.name);
tan.setName('tan');
console.log(tan.name);

// 'use strict';

// let Mammal = {
//     name : 'toto',
//     eat : function() {console.log('I eat.'); }
// };

// let Human = Object.create(Mammal);

// let Child = function(){

// };

// Child.prototype = Object.create(Human);

// Human.__proto__.speak = function(){
//     console.log('I speak.');
// };

// Child.prototype.play = function(){
//     console.log('I play.');
// };

// Child.prototype.setName = function(name){
//     this.name = name;
// }

// let tan = new Child();
// tan.eat();
// tan.speak();
// console.log(tan.name);
// tan.setName('tan');
// console.log(tan.name);

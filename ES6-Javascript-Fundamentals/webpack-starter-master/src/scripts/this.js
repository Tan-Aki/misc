/////////////////////////////////////////////
// With the "function" keyword
/////////////////////////////////////////////

// 1. Implicit binding ==> this becomes the object from which we are calling the method, the "thing to the left"

var me = {
	name: 'Tyler',
	sayName: function() {
		console.log(this.name, this);
	}
};
me.sayName();

// 2. Explicit binding ==> call, bind, apply  to specify what we want this to be

var me = {
	name: 'Tyler',
	sayName: function() {
		console.log(this.name);
	}
};

var you = {
	name: 'Toto',
	sayName: function() {
		console.log(this.name);
	}
};

me.sayName.bind(you)(); // toto

// 3. New binding == > with the "new" keyword, "this" becomes the object we are instanciating and only WHEN we are instanciating, before that "this" doesnt reference to anything

var Human = function(name, age) {
	this.name = name;
	this.age = age;
};

var human = new Human('Toto', 27);
console.log(human.name); // toto

// 4. Window binding ==>by default, this dans le global scope est défini différement selon un browser ou du node.js ou autre.
// sinon, s'il n'y a pas de contexte, this is the global object or the window object
//  so for exemple

console.log(this);
// 1. Dans Node.js : {} empty object
// 2. Dans un browser : window

var myFn = function() {
	console.log(this);
};
myFn();
// 1. Dans un browser : window
// 2. Dans Node.js :
// Object [global] {
// global: [Circular],
// clearInterval: [Function: clearInterval],
// clearTimeout: [Function: clearTimeout],
// setInterval: [Function: setInterval],
// setTimeout: [Function: setTimeout] { [Symbol(util.promisify.custom)]: [Function] },
// queueMicrotask: [Function: queueMicrotask],
// clearImmediate: [Function: clearImmediate],
// setImmediate: [Function: setImmediate] {
//   [Symbol(util.promisify.custom)]: [Function]
// }

// same as above but in an object, the this is the window or global object
var someone = {
	name: 'Tulu',
	surname: this,
	sayName: function() {
		console.log(this.name, this, this.surname);
	}
};
someone.sayName(); // Tulu { name: 'Tulu', surname: {}, sayName: [Function: sayName] } {}

/////////////////////////////////////////////
// With the arrow function
/////////////////////////////////////////////

// une seule règle, le this devient le contexte du local execution contexte parent, la arrow fonction a sa propre scope mais pas son propre contexte
//an arrow function does not have its own this. The this value of the enclosing lexical scope is used; arrow functions follow the normal variable lookup rules
// lexical scope is based on where variables and blocks of scope have been authored in the source code ( wether it's function scope or block scope)
// lexical scope : https://medium.com/@nickbalestra/javascripts-lexical-scope-hoisting-and-closures-without-mystery-c2324681d4be

var me = {
	name: 'Tyler',
	sayName: () => {
		console.log(this.name, this);
	}
};
me.sayName(); // undefined   et {}  this is the context of the parent lexical scope, so here this is and empty object or window in a browser

var myArrowFn = () => console.log(this); // {} this becomes the context of the parent lexical scope (here the parent lexical scope is an object function, and the this of that object function is the global object or window)
myArrowFn();

var invoice = {
	number: 123,
	process: function() {
		return () => console.log(this); //  { number: 123, process: [Function: process] }  this of the parent function object, it is the object invoice
	}
};
invoice.process()();

/////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////// Languages Features ///////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

//// const et let, et var ////
// var is hoisted, not let and const

const carId = 100; // needs to be initilized and cannot change.
// carId = 5; // error, we cannot re assign a value to the const

let carId2 = 100;
carId2 = 50; // works because we can reassign the value

//// REST, inside the parameter list of a function. collect all remaining arguments into an array ////
function sendCars(id1, ...remainingCarIds) {
	console.log(id1); // 100
	remainingCarIds.forEach((id) => console.log('rest' + id)); //rest200, rest555
}
sendCars(100, 200, 555);

//// spread, 3 uses ////

//// Spread in function calls,   expend an array into a list of arguments
function startCars(car1, car2, car3) {
	console.log(car1, car2, car3);
}

let carIds3 = [ 100, 300, 500 ];
startCars(...carIds3); // 100,300,500

// works with strings also
startCars(...'abc'); // a,b,c

//// spread in arrays, to construct another array or to copy an array.

let booksIds = [ 1, 3, 4 ];
let booksIds2 = [ 3, 4, 5 ];

const mergedbooks = [ ...booksIds, 27, ...booksIds2, 6, 7 ];
console.log(mergedbooks); // [1,3,4,27,3,4,5,6,7]

//// spread in objects. // copies properties from one object into another object
const feline = { legs: 4, family: 'felidae' };
const canine = { family: 'caninae', furry: true };

const dog = { ...canine, isPet: true };
// { family: 'caninae', furry: true, isPet:true};

const catDog = { ...feline, ...canine };
// { legs : 4 family: 'caninae', furry: true};

//// destructuring arrays ////
let carIds = [ 1, 2, 3 ];
let [ car1, car2, car3 ] = carIds;
console.log(car1, car2, car3); // 1,2,3

let carIds2 = [ 1, 2, 3, 4, 5 ];
let car12, car22, remainingCars;
[ car12, , car22, ...remainingCars ] = carIds2;
console.log(car12, remainingCars); // 1 [4,5]

//// destructuring objects ////

let car = { id: 5000, style: 'convertible' };
let id, style;
// {id,style} = car; // doesn't work, interperter is confused, block of code or destructuration ? {} can also mean a block of code
({ id, style } = car); // solved !   // id and style must be exactly the name inside the object
let { id: newId, style: newStyle } = car; // we can give new names to the variables

console.log(id, style); // 5000 convertible
console.log(newId, newStyle); // 5000 convertible

//// nested destructuring

const churches = [ { name: 'sixtine' }, { name: 'notreDame' } ];

let [ , { name } ] = churches;

console.log(name); // notreDame

//// we can also destructure parameters inside a function

//// common type Conversions : toString(), parseInt(), parseFloat() ////

//// controlling loops with break and continue ////

let i = 0; // i doesn't have to be initialized inside the loop
for (; i < 12; i++) {
	if (i === 2) continue;
	if (i === 8) break;
}

for (let i = 0; i < 12; i++) {
	// we can and shoud declare and initialize i inside the loop
	//dosomething
}

//// template literals ( we use ``  instead of '' or "", and it allows use to add variables to the string or conditionnal operators inside the ${} ) ////

var value = 'toto';

console.log(`Hello ${value}`);

let a = 5;
let b = 10;
console.log('Fifteen is ' + (a + b) + ' and\nnot ' + (2 * a + b) + '.');
// "Fifteen is 15 and
// not 20."

console.log(`Is 4 greater than 5 ? :  ${5 < 4 ? 'yes' : 'no'}`);

//// for in : use with objects,  can work on array and string but not advised. object muse have Enumerable set to true ////
//// for of : use with array and strings. doesnt work on objects.  object must have a  [symbol.iterator] property ////

var items = [ 'it1', 'it2' ];

for (var item of items) {
	console.log(item);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////// Operators /////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

//// '==' vs '===' ////

//// <   <=   >  >=     etc  ////

////    ONE OR THE OTHER if first arg is null or 0 ////
let userSettings = null;
let defaultSettings = { name: 'Default' };
console.log(userSettings || defaultSettings); // defaultSettings

//// conditionnal operator ////
console.log(5 < 4 ? 'yes' : 'no');

//// assignment operators ////
let var1 = 10;
var1 += 10;

//// precedence table can be found on the web ////

/////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////// Functions and scope ///////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

//// function scope  function () {} ////
// var and let keywords are function scoped

//// block scope   inside a for, while loop, etc, or simply inside {} ( when is not a function) ////
// let keyword can also be block scoped

//// IIFES ////

(function toto() {
	//dosomething
})();

//// function expression is when we put the function inside of variable. ////
// it is useful, especially with closures or IIFES
// Closures and this.  Closure will keep the context of the function "alive" and stored in a variable.

let app = (function() {
	let carId = 123;
	let obj = {
		name: 'John',
		getName: function() {
			return this.name; // return "John"
		}
	};
	let getId = function() {
		return carId;
	};
	let getObj = function() {
		return obj;
	};
	return {
		getId: getId,
		getObj: getObj,
		getName: function() {
			return obj.getName();
		}
	};
})();

console.log(app.getId()); // 123
console.log(app.getObj()); // obj
console.log(app.getName()); // john

//// call, apply, bind : to pass the context we want to the "this" ////

let obj = {
	name: 'Tan',
	age: 28
};

let myFunction = function(name, age) {
	this.name = name;
	this.age = age;
};

console.log(obj.name);
// obj.myFunction(); // doesn't work, no method in object
myFunction.call(obj, 'Toto', 27);
console.log(obj); // { name: 'Toto', age: 27 }

myFunction.apply(obj, [ 'Titi', 28 ]); // an array
console.log(obj); // { name: 'Titi', age: 28 }

//// bind  ////

let o = {
	carId: 123,
	getId: function() {
		return this.carId;
	}
};

let newCar = { carId: 456 };
let newFn = o.getId.bind(newCar);
console.log(newFn()); // 456

//// arrow function.  ////
// "this" doesnt behave the same as with the function keyword !! See the this.js file for more information

let getId = () => 123;
console.log(getId()); // 123

let getId2 = (prefix) => prefix + 123;
console.log(getId2('ID:')); // ID : 123

let getId3 = (prefix, suffix) => prefix + 123 + suffix;
console.log(getId3('ID:', '!')); // ID : 123!

let getId4 = (prefix, suffix) => {
	return prefix + 123 + suffix;
};
console.log(getId4('ID:', '!')); // ID : 123!

//// default parameters in function declaration ////

let trackCar = function(carId, city = 'NY') {
	console.log(`Tracking ${carId} in ${city}`);
};
console.log(trackCar(123)); // 123, NY
console.log(trackCar(123, 'Chicago')); // 123, Chicago

/////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////// Objects and array /////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

//// constructor //// Attention uniquement avec le keyword "function",  Capital first letter , this is a convention

var Employee = function(name, boss) {
	this.name = name;
	this.boss = boss;
	this.getName = function() {
		return this.name;
	};
};

let romaric = new Employee('Romaric', 'John');
console.log(romaric.getName());

//// prototype, to save some memory, so that the function getBoss exists only once in the memory, even though we instanciate lots and lots of different Employee objects ////
// you can also add new methods to JS built objects, like String.prototype  or Array.prototype
Employee.prototype.getBoss = function() {
	return this.boss;
};
console.log(romaric.getBoss());

//// JSON stringify ////
let vehicule = {
	id: 123,
	style: 'convertible'
};

console.log(JSON.stringify(car)); // {"id":5000,"style":"convertible"}   // stringify convert to JSON and send it to some endpoint on the web.
// JSON.stringify(myArray); // works too with arrays

//// JSON parse ////
let jsonIn = `[
    {"carId" : 123},
    {"carId" : 456},
    {"carId" : 789}
]`;

let theCarIds = JSON.parse(jsonIn);
console.log(theCarIds);

///////////////////////
//Array iterations////
//////////////////////

//// forEach  function that runs on every element of an array. ////
// does NOT modifies the initial array, unless the callbackfunction does so.
// and returns "undefined" ( you cannot store the result of forEach in a variable)

let anArray = [ { name: 'Tan' }, { name: 'Toto' }, { name: 'Tutu' } ];

anArray.forEach((element, index) => (element.name = `${element.name} ${index}`));
console.log(anArray); // output : [ { name: 'Tan 0' }, { name: 'Toto 1' }, { name: 'Tutu 2' } ]

//// map : same as foreach, but ALSO returns a new array  which can be stored in another variable ////
let anArray2 = [ { name: 'Tan' }, { name: 'Toto' }, { name: 'Tutu' } ];

let modifiedArray = anArray2.map((element, index) => (element.name = `${element.name} ${index}`));
console.log(modifiedArray); //output : [ 'Tan 0', 'Toto 1', 'Tutu 2' ]   // retourne les element.name modifié, dans un tableau
console.log(anArray2); // output : [ { name: 'Tan 0' }, { name: 'Toto 1' }, { name: 'Tutu 2' } ]

// si on veut que les resultats retournés soient des objects, on peut return element
let anArray3 = [ { name: 'Tan' }, { name: 'Toto' }, { name: 'Tutu' } ];
let modifiedArray2 = anArray3.map((element, index) => {
	element.name = `${element.name} ${index}`;
	return element;
});
console.log(modifiedArray2);

// on peut aussi return un élément avec des default parameters
// on retourne un objet avec des attributs par défaut.
// on utilise spread ... pour spreader l'élément et lui ajouter les attributs déjà existants.

// let arr = [{ name: "Tan" }, { name: "Arthy", like: "Foo" }, { who: "??" }]
// let mappedArr = arr.map(function (element) {
//     return {
//         who: 'letTheDogOut',
//         ...element,
//         name: `${element.name || "No Name"}`
//     }
// }
// );
// console.log('mappedArr :' + mappedArr);
// // OUTPUT
// // [
// //   { who: 'letTheDogOut', name: 'Tan' },
// //   { who: 'letTheDogOut', name: 'Arthy', like: 'Foo' },
// //   { who: '??', name: 'No Name' }
// // ]

//// reduce : takes an array and reduce it  one value. Doesnt modify the initial array ////

let arrValues = [ 18, 26, 37 ];
let averageValue = arrValues.reduce((acc, el) => (acc + el) / 2, 0);
console.log(averageValue); // 27.25

//// filter doesnt modify the initial array ////

let filteredValues = arrValues.filter((el) => el > 18);
console.log(filteredValues); //[26,37]

//// every condition must be true for EVERY element of the array ////
let anArray4 = [ { name: 'Tan' }, { name: 'Toto' }, { name: 'Tutu' } ];

let result = anArray4.every((person) => person.name); // does person.name exist for every element of the array ?
console.log(result); // true

//// find ////

let anArray5 = [ { name: 'Tan', age: 30 }, { name: 'Toto', age: 27 }, { name: 'Tutu', age: 31 } ];

let person = anArray5.find((person) => person.age > 30); // finds the first person whose age is >30
console.log(person); // { name: 'Tutu', age : 31 },

/////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////// Classes and modules ///////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

//// class ////

class Human {
	constructor(name) {
		this.name = name;
	}
	sayName() {
		return `My name is ${this.name}`;
	}
	sayWeather(weather) {
		return `and today is ${weather}`;
	}
}

let human = new Human('John');
human.name = 'Juniper';
console.log(human.name); // Juniper
console.log(human.sayName()); // My name is Juniper
console.log(human.sayWeather('beautiful')); // and today is beautiful

//// inheritance ////

class Vehicle {
	constructor() {
		this.type = 'car';
	}
	start() {
		return `Starting ${this.type}`;
	}
}

class Car extends Vehicle {
	constructor() {
		super(); // we need to call the constructor or the parent, use super() keyword
	}
	start() {
		return 'in car Start ' + super.start();
	}
}

let porshe = new Car();
console.log(porshe.type); // car
console.log(porshe.start());

//// modules : see folder modules_models ////
import { Fruit, Star } from './modules_models/Fruit.js';
let orange = new Fruit('orange');
let star1 = new Star('130 cm');
console.log(orange.strain);

// import all export at once.
import * as FruitLib from './modules_models/Fruit.js';
let star = new FruitLib.Star('120 cm');
console.log(star.size);

// we can also import wit a more convenient alias
// import {reallyreallylongmodulename as toto} from 'my-module';

/////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////// BOM and DOM ///////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

// BOM > Windows >> DOM
///// window object /////

// window.document
// window.location
// window.console
// window.innerHeight
// window.innerWidth
// window.pageXOffset
// window.pageYOffset

// window.alert()
// window.back()
// window.confirm()

// window.event

// year = 1956;
// console.log(window.year); // will work only if we don't have imported modules

window.year = 1956; // we need to specify window if we have some imports
console.log(window.year); // will work

//// timers ////

// timout, fires a function after a certain time, here after 1000 ms
let timeoutId = setTimeout(function() {
	console.log('1 second passed');
}, 1000);

// clearTimeout(timeoutId); // if we want to cancel

//// intervals, here, function fires every 1000 ms, we cancel when counter becomes 2 ////
let counter = 0;
let intervalId = setInterval(function() {
	console.log('1 second passed');
	if (++counter === 2) clearInterval(intervalId);
}, 1000);

//// location object ////
// belongs to the BOM ( the browser)
// can be called via window.document.location, ou document.location, ou window.location

// location.href
// location.hostname
// location.port
// location.pathname
// location.search

// location.assign()
// location.reload()

console.log(location.href); //http://localhost:8080/
console.log(document.location.href); //http://localhost:8080/
console.log(window.document.location.href); //http://localhost:8080/

//// the DOM ////

// document.body
// document.forms
// document.links

// document.createElement()
// document.getElementById()
// document.createEvent()
// document.getElementsByClassName()

// events //
// document.onload
// document.onclick
// document.onkeypress

//// selecting  DOM elements ////
// see other repository //rapid-javascript-training, section 7
// let's assume we an html document
let myElement = document.getElementById('elementId');
let elementsArr = document.getElementsByClassName('className');
// console.log(elementsArr[1]);
document.getElementsByTagName('tagName');

//// modify DOM elements ////

// myElement.textContent = 'blabla';
// myElement.setAttribute('name', 'nameValue');
// myElement.classList.add('another-class');
// myElement.style.color = 'blue'; // to manipulate CSS

/////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////// error handling ////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

//// try catch finally ////

try {
	throw new Error('Custom Error');
} catch (e) {
	console.log(e.name + ' - ' + e.message);
} finally {
	console.log('Finally done.');
}

// Error - Custom Error
// Finally done.

try {
	let newPopo = popo;
} catch (e) {
	console.log(e.name + ' - ' + e.message);
} finally {
	console.log('Finally done.');
}
// reference error
// Finally done.

// RangeError - Range Error
// here we can manage different types of error if we compare them with an If for exemple
try {
	throw new RangeError('Range Error');
} catch (e) {
	if (e instanceof RangeError) console.log(e.name + ' - ' + e.message);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////// ASYNC PROGRAMMING /////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

//// callbacks ////

let button1 = document.getElementById('button1');
let textArea = document.getElementById('text-area');

textArea.style.visibility = 'hidden';

let checkSrvAuth = (fetchAndDisplayUserNameIfAuthSuccessful) => {
	//do something, usually a request to a server
	textArea.style.visibility = 'visible';
	textArea.innerText = 'Checking Auth...';
	console.log('Checking Auth...');
	let authAccepted = Math.round(Math.random());

	// https://stackoverflow.com/questions/41431605/handle-error-from-settimeout
	setTimeout(function() {
		if (authAccepted) {
			console.log('Auth accepted !');
			fetchAndDisplayUserNameIfAuthSuccessful();
		} else {
			try {
				throw new Error('Auth is denied');
			} catch (error) {
				console.log(error);
				textArea.innerHTML = error;
			}
		}
	}, 2000);
};

let fetchSrvUser = (displayUserName) => {
	//do something, usually a request to a server
	console.log('Fetching User...');
	// got a user from database
	let user = { name: 'Tan' };
	console.log('User found !');
	displayUserName(user);
};

let fetchAndDisplayUserNameIfAuthSuccessful = function() {
	fetchSrvUser(displayUserName);
};

let myfn = function() {
	checkSrvAuth(fetchAndDisplayUserNameIfAuthSuccessful);
};

let displayUserName = function(user) {
	textArea.innerHTML = user.name;
};

button1.addEventListener('click', () => myfn());

//// promises  ////

let button2 = document.getElementById('button2');
let textArea2 = document.getElementById('text-area2');

let checkAuth2 = () => {
	return new Promise((resolve, reject) => {
		console.log('Checking Auth...');
		let authAccepted = Math.round(Math.random()); // 1 or 0 to simulate failed or accepted auth
		setTimeout(function() {
			if (authAccepted) {
				console.log('Auth accepted !');
				resolve();
			} else {
				console.log('Auth denied');
				reject('Auth is denied');
			}
		}, 2000); // auth is accepted or denied after 2 seconds
	});
};

let fetchUser2 = () => {
	return new Promise((resolve, reject) => {
		//do something, usually a request to a server
		console.log('Fetching User...');
		// got a user from database
		let user = { name: 'Tan' };
		console.log('User found !');
		resolve(user);
	});
};

let displayUserName2 = function() {
	checkAuth2()
		.then(
			() => {
				return fetchUser2();
			}
			// , // handle error in promise directly, possible mais pas conseillé
			//     (error) => {
			//         textArea2.innerHTML = 'Error : ' + error;
			//         console.log('Error : ' + error);
			//     }
		)
		.then((user) => {
			textArea2.innerHTML = user.name;
		})
		.catch(
			// catch any error in all your promises
			(error) => {
				textArea2.innerHTML = 'Error : ' + error;
				console.log('Error : ' + error);
			}
		);
};

button2.addEventListener('click', displayUserName2);

//// this is with premises too, but it doesnt work because the moment we are declaring and then assigning a new Promise, the promise is "excuted".
//// that is why we use function to get our promises in the exemple above.
// let button2 = document.getElementById('button2');
// let textArea2 = document.getElementById('text-area2');

// let checkAuth2 = new Promise((resolve, reject) => {
//     console.log('Checking Auth...');
//     let authAccepted = Math.round(Math.random());  // 1 or 0 to simulate failed or accepted auth
//     setTimeout(function () {
//         if (authAccepted) {
//             console.log('Auth accepted !');
//             resolve(authAccepted);
//         }
//         else {
//             console.log('Auth denied');
//             reject('Auth is denied');
//         };
//     }, 2000); // auth is accepted or denied after 2 seconds
// });

// let fetchUser2 = new Promise((resolve, reject) => {
//     //do something, usually a request to a server
//     console.log('Fetching User...');
//     // got a user from database
//     let user = { name: 'Tan' };
//     console.log('User found !');
//     resolve(user);
// });

// let displayUserName2 = function () {
//     checkAuth2
//         .then(() => {
//             return fetchUser2;
//         }
//             // , // handle error in promise directly, possible mais pas conseillé
//             //     (error) => {
//             //         textArea2.innerHTML = 'Error : ' + error;
//             //         console.log('Error : ' + error);
//             //     }
//         )
//         .then((user) => {
//             textArea2.innerHTML = user.name;
//         }
//         )
//         .catch( // catch any error in all your promises
//             (error) => {
//                 textArea2.innerHTML = 'Error : ' + error;
//                 console.log('Error : ' + error);
//             }
//         );
// };

// button2.addEventListener('click', displayUserName2);

//// async/await ////

let button3 = document.getElementById('button3');
let textArea3 = document.getElementById('text-area3');

let checkAuth3 = () => {
	return new Promise((resolve, reject) => {
		console.log('Checking Auth...');
		let authAccepted = Math.round(Math.random()); // 1 or 0 to simulate failed or accepted auth
		setTimeout(function() {
			if (authAccepted) {
				console.log('Auth accepted !');
				resolve();
			} else {
				console.log('Auth denied');
				reject('Auth is denied');
			}
		}, 2000); // auth is accepted or denied after 2 seconds
	});
};

let fetchUser3 = () => {
	return new Promise((resolve, reject) => {
		//do something, usually a request to a server
		console.log('Fetching User...');
		// got a user from database
		let user = { name: 'Tan' };
		console.log('User found !');
		resolve(user);
	});
};

let displayUserName3 = async function() {
	try {
		await checkAuth3();
		let user = await fetchUser3();
		textArea3.innerHTML = user.name;
	} catch (error) {
		textArea3.innerHTML = 'Error : ' + error;
		console.log('Error : ' + error);
	}
};

button3.addEventListener('click', displayUserName3);

/////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////// Data access using http ////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

//// XHR ////

// let xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//         console.log(this.responseText);
//     }
// };

// xhttp.open("GET", "http://5e2f41529c29c900145db22d.mockapi.io/test/users", true);

// xhttp.send();

//// GET JQUERY ////
//// il faut installer jquery first with npm install jquery dans le dossier du projet

import $ from 'jquery';

let myPromise = $.get('http://5e2f41529c29c900145db22d.mockapi.io/test/users');

myPromise
	.then((data) => {
		console.log('Success promises: ', data);
	})
	.catch((error) => {
		console.log('Error Promises : ', error.responseText);
	});

//// same as above but with async/await ////

// import $ from 'jquery';

let getUsersFromEndPoint = async function() {
	try {
		let users = await $.get('http://5e2f41529c29c900145db22d.mockapi.io/test/users');
		console.log('Success Async: ', users);
	} catch (error) {
		console.log('Error Async : ', error.responseText);
	}
};

getUsersFromEndPoint();

//// POST JQUERY ASYNC////

// import $ from 'jquery';

let userTan = {
	name: 'Tan Tan',
	avatar: 'tan.jpg'
};

let postUserToEndPoint = async function(user) {
	try {
		let users = $.post('http://5e2f41529c29c900145db22d.mockapi.io/test/users', user);
		console.log('Success POST Async: ', users);
	} catch (error) {
		console.log('Error POST ASYNC: ', error.responseText);
	}
};

// postUserToEndPoint (userTan);   // to call the function. Was commented out because was being called at every refresh of the page

//////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////// Forms //////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////

//// PRevent form submission ////

let form = document.getElementById('user-form');

var superVariable = 'user';

form.addEventListener('submit', (event) => {
	let user = form.elements['user'];
	let userError = document.getElementById('user-error');
	let avatarFile = form.elements['avatar-file'];

	if (user.value.length > 5) {
		userError.textContent = 'Invalid, must be less or equal to 5';
		userError.style.color = 'red';
		user.style.borderColor = 'red';
		user.focus();
	} else {
		let posting = {
			user: user.value,
			avatarFile: avatarFile.value
		};
		postUserToEndPoint(posting); // call to function created above that will post the user to the endpoint
	}

	event.preventDefault();
	console.log(user.value, avatarFile.value);
});

/////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////// Security and building for production //////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

// dont store any password in a variable in javascript code
// don't use global variables

// don't use "eval"

// Use HTTPS
// Use HTTP Header : Strict Transport security
// use cookie attributes Secure and HttpOnly

// cross site scripting : content security Policiy (CSP), et Cross Origin resource sharing (CORS)

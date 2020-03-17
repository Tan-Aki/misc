// function myFn(x, cb) {
// 	setTimeout(function() {
// 		cb(x);
// 	}, 5000);
// }

// myFn(5, function(x) {
// 	console.log(x);
// });

// console.log('hi');

// function invocation as a property of an object

// const myFn = (x) => {
// 	return x + 5;
// };

// const toto = {
// 	prop: myFn(5)
// };

// console.log(toto.prop);

// const a = 3;
// const b = 5;

// if (a === 3) console.log(a + b);
// if (a === 3) return console.log(a + b);

/////////////////////////////////////////
const tutu = {
	name: 'tututu'
};

const foo = {
	prop: 'tititi'
};

const myFn2 = ({ prop, name }) => {
	console.log(name);
	console.log(prop);
};

myFn2(foo);
// undefined
// tititi

//////////////////////////////////////

const myFn3 = (arg1, arg2) => {
	console.log(arg1);
	if (arg2) console.log(arg2);
};

myFn3('a'); // a

const myFn4 = (arg1, arg2) => {
	console.log(arg1);
	if (arg2) console.log(arg2);
};

myFn4('a', undefined); // a

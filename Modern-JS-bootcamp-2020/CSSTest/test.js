const wrapper = (cb) => {
	let toto = {
		first: 'toto',
		last: 'raka'
	};
	console.log(toto);
	return (...args) => {
		cb(args);
	};
};

const myFn = (firstName, lastName) => {
	console.log(firstName, lastName);
};

wrapper(myFn('Tom', 'Johns'));
wrapper(myFn('Tom', 'Johns'));
wrapper(myFn('Tom', 'Johns'));
wrapper(myFn('Tom', 'Johns'));
wrapper(myFn('Tom', 'Johns'));
wrapper(myFn('Tom', 'Johns'));
wrapper(myFn('Tom', 'Johns'));

// const wrapper = (cb) => {
// 	let toto;
// 	toto++;
// 	console.log(toto);
// 	if (toto < 5) cb(args);
// };

// const myFn = (firstName, lastName) => {
// 	console.log(firstName, lastName);
// };

// wrapper(myFn('Tom', 'Johns'));
// wrapper(myFn('Tom', 'Johns'));
// wrapper(myFn('Tom', 'Johns'));
// wrapper(myFn('Tom', 'Johns'));
// wrapper(myFn('Tom', 'Johns'));
// wrapper(myFn('Tom', 'Johns'));
// wrapper(myFn('Tom', 'Johns'));

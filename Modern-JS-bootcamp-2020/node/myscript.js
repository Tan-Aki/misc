// const message = 'hi there';

// module.exports = message;

let counter = 0;
// module.exports = counter;

module.exports = {
	incrementCounter() {
		counter = counter + 1;
	},
	getCounter() {
		return counter;
	}
};

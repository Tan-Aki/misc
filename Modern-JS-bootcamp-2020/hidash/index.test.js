const assert = require('assert');
const { forEach, map } = require('./index');

const test = (desc, fn) => {
	console.log('---', desc);
	try {
		fn();
	} catch (err) {
		console.log(err.message);
	}
};

test('The forEach Function', () => {
	let sum = 0;
	forEach([ 1, 2, 3 ], (value) => {
		sum += value;
	});

	// if (sum !== 6) {
	//     throw new Error('Expected summing array to equal 6');
	// }

	//// same as above but with a default error message and throws error for us( see node js API )
	assert.strictEqual(sum, 6, 'Expected forEach to sum the array'); // we can add a third argument to override default message
});

test('The map Function', () => {
	const result = map([ 1, 2, 3 ], (value) => {
		return value * 2;
	});
	// result === [2,4,6]

	// if (result[0] !== 2) {
	// 	throw new Error('Expected to find 2');
	// }
	// if (result[1] !== 4) {
	// 	throw new Error('Expected to find 4');
	// }
	// if (result[2] !== 6) {
	// 	throw new Error('Expected to find 6');
	// }

	// assert.strictEqual(result[0], 2);
	// assert.strictEqual(result[1], 4);
	// assert.strictEqual(result[2], 6);

	assert.deepStrictEqual(result, [ 2, 4, 6 ]);
});

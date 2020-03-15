const fs = require('fs');
const crypto = require('crypto');
const util = require('util');
const Repository = require('./repository');
const scrypt = util.promisify(crypto.scrypt);

class UsersRepository extends Repository {
	async comparePasswords(saved, supplied) {
		const [ hashed, salt ] = saved.split('.');
		const buff = await scrypt(supplied, salt, 64);
		const hashedSupplied = buff.toString('hex');
		// console.log('hashedsupplied: ', hashedSupplied, 'hashed:', hashed);
		return hashedSupplied === hashed;
	}
	async create(attrs) {
		attrs.id = this.randomId();
		const salt = crypto.randomBytes(8).toString('hex');

		const hashed = await scrypt(attrs.password, salt, 64);

		const records = await this.getAll();
		const record = {
			...attrs,
			password: `${hashed.toString('hex')}.${salt}`
		};

		records.push(record);
		await this.writeAll(records);
		return record;
	}
}

module.exports = new UsersRepository('users.json');

//////// WRONG WAY TO EXPORTS ////////////////

// module.exports = UserRepository;

// // ANOTHER FILE...
// const UserRepository = require('./users.js');
// const repo = new UsersRepository('users.json');

// // YET ANOTHER FILE...  with a typo
// const UserRepository = require('./users.js');
// const repo = new UsersRepository('user.json');

////////////// TEST THE users.js file ////////////////////

// const test = async () => {
// 	const repo = new UsersRepository('users.json');

// 	// await repo.create({
// 	// 	email: 'test@test.com',
// 	// 	password: 'password'
// 	// });
// 	// const users = await repo.getAll();
// 	// console.log(users);

// 	// const user = await repo.getOne('50c18d45');

// 	// await repo.update('fe950d20', { age: 31 });
// 	const user = await repo.getOneBy({ age: 31, password: 'password' });

// 	console.log(user);
// };

// test();

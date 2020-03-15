const eater = {
	eat(amount) {
		console.log(this.name + ' is eating');
		this.energy += amount;
	}
};

const Dog = (name, energy, breed) => {
	let dog = {
		name,
		energy,
		breed,
		...eater
	};
	return dog;
};

const leo = Dog('Leo', 10, 'Pug');
console.log(leo);
leo.eat(10);
console.log(leo.energy);

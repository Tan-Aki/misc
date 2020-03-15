// let eat = (amount) => {
//     console.log( this.name + ' is eating');
//     this.energy += amount;
// }

// instead of what the method above

const eater = (state) => ({
	eat(amount) {
		console.log(state.name + ' is eating');
		state.energy += amount;
	}
});

// using a factory
const Dog = (name, energy, breed) => {
	let dog = {
		name,
		energy,
		breed
	};
	return Object.assign(dog, eater(dog));
};

const leo = Dog('Leo', 10, 'Pug');
console.log(leo);
leo.eat(10);
console.log(leo.energy);

// using a constructor, not the best ! Prefer factories

const Cat = function(name, energy, breed) {
	this.name = name;
	this.energy = energy;
	this.breed = breed;
};

const toto = new Cat('toto', 10, 'tiger');
Object.assign(toto, eater(toto));

toto.eat(10);
console.log(toto.energy);

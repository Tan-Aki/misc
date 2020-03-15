let myobj = {
	toto: 'tata',
	tutu: 'tete'
};

console.log(myobj);
console.log(myobj);

let nums = [ 1, 2, 3 ];
let otherNums = [ 1, 2, 3 ];

console.log('is it ?' + (nums.toString() === otherNums.toString()));

let anArray2 = [ { name: 'Tan' }, { name: 'Toto' }, { name: 'Tutu' } ];

let modifiedArray = anArray2.map((element, index) => `${element.name} ${index}`);
console.log(modifiedArray); //output : [ 'Tan 0', 'Toto 1', 'Tutu 2' ]   // retourne les element.name modifié, dans un tableau
console.log(anArray2); // output : [ { name: 'Tan 0' }, { name: 'Toto 1' }, { name: 'Tutu 2' } ]

const votes = [ 'y', 'y', 'y', 'y', 'n', 'n', 'n', 'n', 'n', 'n' ];
let results = votes.reduce((acc, el) => {
	acc[el] = (acc[el] || 0) + 1;
	return acc;
}, {});

console.log(results);

let person = {
	name: 'Tan',
	surname: 'Jullin',
	printBio() {
		console.log('my bio is' + this.name);
	}
};

// let person2 = { ...person };
// person2.name = 'Toto';
// console.log(person2);

let person2 = {
	name: 'toto',
	surname: 'ralala'
};

person2.printBio = person.printBio;

person2.printBio();

//// the annoyer : "this" explanation

const annoyer = {
	phrases: [ 'yolo', 'yala', 'solo', 'sili', 'vatara', 'votoro' ],

	pickPhrase() {
		const { phrases } = this;
		const idx = Math.floor(Math.random() * phrases.length);
		return phrases[idx];
	},
	start() {
		this.timerId = setInterval(() => {
			// on crée this.timerId, qui va devenir une propriété de l'object depuis lequel on appelle la méthode
			console.log(this.pickPhrase());
		}, 2000);
	},
	stop() {
		clearInterval(this.timerId);
	}
};

// annoyer.start();
// annoyer.stop();

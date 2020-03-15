var project = {
    name: 'Project Phoenix'
};

// console.log(project.foo()); // erreur, foo doesnt exist
console.log(project.toString()); //  in fact it called project.prototype.toString() // [object Object]

console.log(typeof Object.prototype); // object
console.log(typeof Object.prototype.toString); // object

console.log(project.prototype); // we don't get acces to the field prototype, it still exists.
console.log(typeof project.__proto__); // object
console.log(project.__proto__ === Object); // false
console.log(project.__proto__ === Object.prototype); // true

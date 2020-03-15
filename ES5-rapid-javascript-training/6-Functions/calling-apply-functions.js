let obj = {
    name : 'Tan',
    age : 28,
}

let myFunction = function(name, age) {
    this.name = name;
    this.age = age;
}

console.log(obj.name);
// obj.myFunction(); // doesn't work, no method in object
myFunction.call(obj, 'Toto', 27);
console.log(obj); // { name: 'Toto', age: 27 }


myFunction.apply(obj, ['Titi', 28]); // an array
console.log(obj); // { name: 'Titi', age: 28 }





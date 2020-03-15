// ({ a, b } = { a: 10, b: 20 });
// console.log(a); // 10
// console.log(b); // 20


// // Stage 4(finished) proposal
// ({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
// console.log(a); // 10
// console.log(b); // 20
// console.log(rest); // {c: 30, d: 40}



let arthy = {name: "Arthy", age: 30};
let tan = {name: "Tan", like: "toto"};

// Deconstruction:
let {name, age} = arthy;
console.log(`Arthy's name is: ${name}, he's ${age} years old`);
console.log( typeof name);

// Spread operator ...
let merge = {...tan, ...arthy };
console.log("Merged :", merge); // {name: "Arthy", age:30, like: "toto"}

// raccourci key value
let name2 = "Arthy";
let age2 = 30;
let arthy2 = {name2, age2};





// let arthy = {name: "Arthy", age: 30};
// let tan= {...arthy};
// tan.name = "Tan";
// console.log({arthy, tan});

//// version de tan ?
// let arthy = {name: "Arthy", age: 30};
// let tan= {arthy};
// tan.name = "Tan";
// console.log(`arthy :  ${arthy}`, `tan : ${tan}`);

//// ou du coup en plus simple, au lieu de faire n deux lignes:
// let tan= {...arthy};
// tan.name = "Tan";




// // (mais garde en memoire que les attribue s'ils sont non primitif, seront reutilise)

// // et ca c'est TREEEES utilise pour "definir les fonctions"

// let mum = {name: "Mum"};
// let child1 = {name: "ChildA", mum};
// let child2 = {...child1, name: "ChildB"};

// child2.mum.name = "Dad";

// mum.name == child1.mum.name == child2.mum.name == "dad"








// // tu as des users complexes:

// let user = {
//   profile: {firstname: "Arthy", lastname: "Ficiel"},
//   emails: ['a@oui.com', 'b@non.com'],
//   /* ... */
// }


// // Et tu fais une fonction getName(user) {} // Arthy Ficiel
// // si tu fais une fonction comme ca:
// let getName = (user) => `${user.profile.firstname} ${user.profile.lastname}`


// // Tu peux facilement voir  que tu n'utilise que le profile en lisant le code. mais dans une fonction plus complexe c'est pas si simple
// // tu peux tu peux direct deconstruire ton argument pour ne recuperer que profile (comme quand on faisait let arthy = {name:"Arthy"}; let {name} = arthy;
// // et tu fais :
// let getName = ({profile}) => `${profile.firstname} ${profile.lastname}`
// // dans les deux cas tu l'apelle en faisant: getName(user)




function sum(x, y, z, t) {
    return x + y + z + t;
  }
  
const numbers = [1, 2];
const numbers2 = [3];

console.log(sum(...numbers, ...[3,4]));
// expected output: 6




console.log(sum.apply(null, numbers));
// expected output: 6


// const x = 5;
// const y = x;

// x++; // doesnt work  because TypeError: Assignment to constant variable. use let instead

// console.log(x, y);




var dateFields = [1970, 0, 1];  // 1 Jan 1970
var d = new Date(...dateFields);
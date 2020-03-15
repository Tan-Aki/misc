let persons = [
  {name: "A", age: 15},
  {name: "G", age: 31},
  {name: "E", age: 66},
  {name: "U", age: 32},
  {name: "S", age: 8},
  {name: "I", age: 12},
  {name: "O", age: 18},
  {name: "B", age: 71},
]


//   2/ un tableau avec les nom des person mineur et trier par ordre alphabetique


let children = persons.filter( child => (child.age < 18));
console.log(children);
// [
//   { name: 'A', age: 15 },
//   { name: 'S', age: 8 },
//   { name: 'I', age: 12 }
// ]



let childrenNames = children.map(child => child.name);
console.log(childrenNames);
// [ 'A', 'S', 'I' ]


let childrenNamesInOrder = childrenNames.sort();
console.log(childrenNamesInOrder);
// [ 'A', 'I', 'S' ]



//   1/ la moyenne de l'age des personne majeur. 

//Map to get an array of person ages

let ages = persons.map(person => person.age);
console.log(ages);

// [
//   15, 31, 66, 32,
//    8, 12, 18, 71
// ]


//Filter to get only the adults

let adultsAges = ages.filter(adult => (adult >=18) );
console.log(adultsAges);

// [ 31, 66, 32, 18, 71 ]



// reduce to get the average of the adults ages

let arrAvg = adultsAges.reduce((acc,el) => acc + el, 0) / adultsAges.length;
console.log(arrAvg);
// 43.6





// 3/ qui te donne tout (sans faire tout a la suite en copiant/collant):
//  - les majeurs: leur noms ordonnee et la moyenne de leur ages
//  - les mineurs: leur noms ordonnees et la moyenne de leurs ages
// (peu etre utiliser les objects pour stocker pour ca?)
// a toi de voir

// { 
//     majeur: {names: ["A", "B", "C"],sum: 47}, 
//     mineur: {names: ["D", "E", "F"],sum: 12},
//   }




let childrenNamesInOrder2 = persons.filter(child => (child.age < 18)).map(child => child.name).sort();
// console.log(`children names in order : ${childrenNamesInOrder2}`);
// [ 'A', 'I', 'S' ]

let adultNamesInOrder2 = persons.filter(adult => (adult.age >= 18)).map(adult => adult.name).sort();
//console.log(`adult names in order : ${adultNamesInOrder2}`);

let ages2 = persons.map(person => person.age);

let adultsAges2 = ages2.filter(adult => (adult >=18));
let childrenAges2 = ages2.filter(child => (child < 18));

let arrAvgAdult2 = parseInt(adultsAges2.reduce((acc,el) => acc + el, 0) / adultsAges2.length);
let arrAvgChildren2 = parseInt(childrenAges2.reduce((acc,el) => acc + el, 0) / childrenAges2.length);

// console.log(`avg child : ${arrAvgChildren2} avg adult : ${arrAvgAdult2}` );

let myObject = {
  majeur : { names : adultNamesInOrder2, moy : arrAvgAdult2},
  mineurs : { names : childrenNamesInOrder2, moy : arrAvgChildren2},
}

console.log(myObject);



/////////////////////////////////////////////////////////////////////////////////
// solution de Arthy 


let personsArthy = [
  {name: "A", age: 15},
  {name: "G", age: 31},
  {name: "E", age: 66},
  {name: "U", age: 32},
  {name: "S", age: 8},
  {name: "W", age: 12},
  {name: "O", age: 18},
  {name: "B", age: 71},
]


let result = personsArthy.reduce((acc, el) => {
  // pour chaque element du tableau
  let key = el.age >= 18 ? 'majors' : 'minors';  // key reçoit soit "majeur" soit "mineur" selon l'age
  acc[key].moy = ((acc[key].moy * acc[key].names.length) + el.age) / (acc[key].names.length + 1);     // ((0 * 0) + 15) / (0 + 1)   // (( 15* 1 ) + 8 )/ (1 + 1)  // (( 10,5 * 2 )  + 12) / (2 + 1)
  acc[key].names.push(el.name); // ['A'] // ['A', 'S'] // ['A', 'S', 'W']
  acc[key].names.sort(); // ['A'] // ['A', 'S'] // ['A', 'S', 'W']
  return acc; // retourne un objet mis à jour en fonction de la clé (minors our majors) qui contient deux clés/valeurs, chaque valeur contient un objet  qui contient deux clés/valeurs moy et un tableau de noms en ordre alphabtique
}, {minors:{moy: 0, names:[]}, majors:{moy: 0, names:[]}});

console.log(result);


// {
//   minors: { moy: 11.666666666666666, names: [ 'A', 'S', 'W' ] },
//   majors: { moy: 43.6, names: [ 'B', 'E', 'G', 'O', 'U' ] }
// }
// un objet qui contient deux clés/valeurs, chaque valeur contient un objet  qui contient deux clés/valeurs moy et un tableau de noms en ordre alphabtique


/////////////////////////////////////////////////////////////////////////////////


// reduce renvoit ce qu'on lui demande de renvoyer, ici une function


let array = [1,2,3];

let fn = array.reduce((acc, el) => {
  return () => {
     return `${acc()} ${el}`;
  }
}, () => { return "I'm a function who contain:"});

console.log(fn());



/////////////////////////////////////////////////////////////////////////////////


// tiens je viens de faire une fonction qui te retourn le factoriel
// ca peu etre interessant aussi que tu la face
// si je te donne 4, tu dois me retourner 1 * 2 * 3 * 4 = 24
// si je te donne 8 : 1 * 2 * 3 * 4 * 5 * 6 * 7 * 8  = 40320



let factor = (num) => {
      let array = [];
      for (i = 1; i <= num; i++) {
          array.push(i);
        }  
        return array.reduce((acc, el) => acc * el,1);
      };
    
console.log(factor(8));
    
// same but different

let factoriel = (num) => [...Array(num).keys()].reduce((acc, el) => acc * (el + 1), 1);

console.log(factoriel(8));


console.log('Array(10) ss' + Array(10));  // ,,,,,,,,,,,,
console.log('Array(10).keys() ' + Array(10).keys()); // array.keys() renvoit un iterator. Array(10).keys() [object Array Iterator]
// console.log(`...Array.key() ${...Array(10).keys()}`); // doesnt work because ${} is expecting only one argument, pas plusieurs arguments (0 1 2 3 4 5 6 7 8 9) 
for (let element of Array(10).keys()) {
  console.log( 'type of element : ' + typeof element + ` // element :`, element);
}
console.log('console.log (Array(10).keys() : ',...Array(10).keys()); // 0 1 2 3 4 5 6 7 8 9
console.log('console log [...Array(10).keys()] ', [...Array(10).keys()]); // [0,1,2,3,4,5,6,7,8,9]



//// this doesnt work because key() returns an object iterator, and is not an array
// Array(10).keys().forEach(element => {
//     console.log(element);
//   });
      
      
      /////////////////////////////////////////////////////////////////////////////////////
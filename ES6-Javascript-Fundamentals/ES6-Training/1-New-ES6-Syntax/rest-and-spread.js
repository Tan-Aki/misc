'use strict';


// rest, on crée un tableau avec le reste des variables
// spread : on sépare le tableau en valeurs distinctes.

// rest : lors de la définition d'une fonction.
// on place tous les arguments restants dans une variable qui va devenir un tableau comprenant les arguments
var showCategories = (productId, ...categories) =>  {
    console.log(productId, categories);

};

showCategories(123,'search', 'advertising'); // 123, ['search', 'advertising']
showCategories(123); // 123, []
console.log(showCategories.length); //1


var showCategories2 = function (productId, ...categories) {
    //console.log(productId, categories);
    console.log(arguments.length)
    
};

showCategories2(123,'search', 'advertising');


var showCategories3 = new Function('...categories', 'return categories;');

console.log(showCategories3('search', 'advertising'))


// spread : on "spread" un tableau déjà existant en valeurs distinctes
// ensuite on peut recréer un tableau avec ces valeurs si on le souhaite
var prices = [12,20,18];
var maxPrice = Math.max(...prices);
console.log(maxPrice); // 20

var newPriceArray = [...prices];
console.log(newPriceArray); //[12,20,18];

console.log(...[1,2,3]);

var newPriceArray = Array(...[,,])
var newPriceArray = [...[,,]]
console.log(newPriceArray); // [ undefined, undefined ]

var maxCode = Math.max(...'43210');
console.log(maxCode); // 4 

var codeArray = ['A', ...'BCD', 'E'];
console.log(codeArray); // [ 'A', 'B', 'C', 'D', 'E' ]

// destructuring,  there will be another section for this.
let tab = [1,2,3];
let [first, ...rest] = tab;
console.log(first);
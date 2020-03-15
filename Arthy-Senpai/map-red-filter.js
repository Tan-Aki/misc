// New Array usage
// avoid usage of for,  while, ...

// Toutes les fonctions (map, forEach, reduce, ...) attend une fonction a executer a chaque iteration
// cette fonction recoit en args : (element, index, originalArr)


let arr = [
  'foo',
  'bar',
  'tan',
  'arthy',
]
console.log(arr);

// Je ne veux pas de "bar", donc filter the list (return `true` to keep it)
let arr2 = arr.filter(el => el !== 'bar')
// let arr2 = arr.filter(el => { return el !== 'bar' })
// let arr2 = arr.filter(function (el) { return (el !== 'bar') } )
console.log(arr2)

// Map ( tranform an array into another array)
let arr3 = arr2.map((el, idx, originalArr) => `${idx} ${el} : ${originalArr[0]}`);
console.log(arr3);


// Reduce (transform an array into a single element)

/*
  let whatToDoEveryTime = function (currentValueAccumulator, currentElementOnArray, arrayIdx, originalArray) {
    return something; // Example: "Par une somme : currentValueAccumulator + currentElementOnArray"
  }

  let notAnArrayAnymore = array.reduce(whatToDoEveryTime, startValue);
*/

// Je veux, une string (plus un array), base sur un array
// Enonce "Je veux use string avec toutes les premieres lettres de chaque mots du tableau"
// Premiere lettre (string is an array of char so el[0], but otherwise use String.substr(start, length) t0 get a part of it)

let str = arr.map(el => el[0]).join('');
console.log(str);

let str2 = '';
for (let i=0; i<arr.length;i++) {
  str2 += arr[i][0]; // i idx , arr[i] > el
}
console.log(str2);

//  ---- Pas trop une nouvelle fonction ----

let arrforreduce = [
  'foo',
  'bar',
  'tan',
  'arthy',
];

let strforreduce = arrforreduce.reduce((acc, element) => `${acc}${element[0]}`, '');


console.log(`str for reduce = ${strforreduce}`);


// Join (create a string with all element and separe them with "something" here: ', ')
let str4 = arr.join(', ');
console.log(str4);

// Fais l'inverse
let arr5 = str4.split(', ');
console.log(arr5);
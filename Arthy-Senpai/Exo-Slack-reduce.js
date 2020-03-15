data = [
    {key1: 'a', key2: 1},
    {key1: 'b', key2: 2},
    {key1: 'c', key2: 5},
  ]

console.log(data);

let  newArray = data.map((el) => el.key2);

console.log(newArray);

// do not use, cest pas fait pour ça.

let newArray2 = data.reduce((acc, el) => {acc.push(el.key2); return acc}, [])


// autre manière de l'écrire, plus compréhensible

let myPushFn = (acctoto, eltoto) => {
  acctoto.push(eltoto);
  return acctoto;
}

let newArray3 = data.reduce((accfoo, elfoo) => myPushFn(accfoo, elfoo.key2), [])

// same as above
let newArray4 = data.reduce(function (accfoo, elfoo) {
  return myPushFn(accfoo, elfoo.key2)
}, [])

let sum = data.reduce((acc,el) => acc = el.key2, 0);


// pour reduce : pour chaque element du tableau, la fonction qu'on passe 
//en premier argument va mettre le resultat de la dite fonction dans l'accumulateur
//et à la fin, le retour de reduce, nous retourne cet accumulateur qu'on pourrait appeler, resultat
// et on fait ce qu'on veut avec ce resultat.

console.log(newArray2);
console.log(newArray3);
console.log(`Somme ${sum}`);


// Pourquoi on ne pas enlever le return acc ? 
// parce que tu veux que ton acculumateur contienne le tableau et pas un chiffre (taille du tableau).
// si tu as ["Foo", "Bar"], tu veux en resultat [ "F", "B" ] donc au debut [] puis ["F"], puis ["F", "B"]
// si tu retourne la taille du tableau apres avoir mis la valeur dedans tu vas avoir:

// init value: []
// tailleDuArray = push("F") > ["F"] 
// return tailleDuArray
// acc : 1

// -- deuxieme passage:

// Ajoute "B" au tableau 1... Impossible


// reduce ressemble à ça 

Array.prototype.myReduce = function( DoOnEveryElement, initValue ) {
  let result = initValue;
  for (let i=0; i < this.length; i++) {   //this is the Array we're working on (Prototype method of Array)
     result = DoOnEveryElement(result, this[i]);
  }  
  return result;
}





// 


  //newArray = [1, 2, 3];


  // soit on le fait en mode objet

// data = {
//   a: 1,
//   b: 2,
//   c: 3
// };

//soit en mode tableau

// data = [a,b,c];
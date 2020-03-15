let arr = [{name: "Tan"}, {name: "Arthy", like:"Foo"}, {who:"??"}]
let mappedArr = arr.map(function (element) {
 return {
   who : 'letTheDogOut',
  ...element, 
  name: `${element.name || "No Name"}`
}});

console.log(mappedArr);
// [
//   { who: 'letTheDogOut', name: 'Tan' },
//   { who: 'letTheDogOut', name: 'Arthy', like: 'Foo' },
//   { who: '??', name: 'No Name' }
// ]

// on retourne un objet avec des attributs par défaut.
// on utilise spread ... pour spreader l'élément et lui ajouter les attributs déjà existants.



// doesnt work

// let authAccepted = false;
// setTimeout((authAccepted=true), 2000);
// console.log(authAccepted);


///////////////////////////////////////////////////////////////////////////////////////////////////

// faire de la logique dans des bracket : 

// mais dans le [] c'est un peu comme un ${} d'une string
// tu peux faire de la logique
// je sais pas genre:
let grid = [[1,2,3], [4,5,6], [7,8,9]];
let position = {x:1, y:1};
let move = {x:0, y:-1};

let from = grid[position.y][position.x];
let to = grid[position.y + move.y][position.x + move.x];

console.log("I move from " + from + " to " + to);
// tu peux faire des math dans le [] (bon la c'est dans un tableau, donc tu peux utiliser que [] mais.. ca pourrai etre un object

///////////////////////////////////////////////////////////////////////////////////////////////////

let tan = ['Tan', 30, 'M', 'Sex'];
let arthy = ['Arthy', 30, 'M', undefined, "Ma bio"];
let foo = new Array('Foo', 20, 'F');



let getName = (who) => {
  return who[0];
};


console.log(getName(tan));

// On va remplace ca par des Objects

let tanObj = {
  0: "Tan",
  1: 30,
  2: 'M',
  3: 'Sex'
};

console.log(getName(tanObj));

// Pas plus simple, utilisons dev vraies keys

let tanObj2 = {
  name: "Tan",
  age: 30,
  sex: 'M',
  love: 'Sex',
  what: "Whaaat?",
};
// let arthy = new Object()
let arthyObj2 = {
  name: "Tan",
  age: 30,
  sex: 'M',
  bio: 'My bio',
};

let key = "age";
// tanObj2.age === tanObj2['age'] === tanObj2[key]

let getObjName = (who) => who.name;
// let getObjName = (who) => who['name'];s

console.log(tanObj2.name, ' <=> ', getObjName(tanObj2));

console.log("tanObj2.key not working ", tanObj2.key, " because tanObj2 dont have any attribute called key");
console.log("use tanObj2[key] format to inject content of key ", tanObj2[key]);



let tantan = {
  keyy: "Foo",
  name: "Tan",
}
let keyy = "name";
let getNameKey = () => "name";
console.log(tantan.keyy + " != " + tantan[keyy] + " == " + tantan[getNameKey()]);


// accès à propriété à l'interieur d'objet à l'interieur d'objet

let tantan2 = {name: "Tan"} // create obj
tantan2.me = tantan2; // ref to himself
console.log(tantan2.name, tantan2.me.me.me.me.me.me.me.me.me.me.name);



let getObjWhat_Wrong = (who, what) => {
  return who.what;
}
let getObjWhat = (who, what) => {
  return who[what];
}
console.log(getObjWhat_Wrong(tanObj2, key), getObjWhat(tanObj2, key));


tanObj2.foo = "bar";

console.log(tanObj2);

tanObj2.sayHello = () => { return `Hello` };

console.log(tanObj2.sayHello());

let countCreated = 0;


let dad = { name: "Dad" },
    mum = { name: "Mum" },
    kid = { name: "Tan" };

mum.with = dad;
dad.with = mum;
mum.child = dad.child = kid;
kid.parents = [mum, dad];

console.log(dad, mum, kid);
console.log(dad.with.child.parents[0].with.child.parents[1].child.name);
//dad > mum > tan > mum > dad > tan > dad > tan > name // Tan


// les object non-primitif ne sont que des references a l'object original
let tantanoo = {name: 'Tan'};
let arthyoo = tantanoo;
arthyoo.name = "Arthy";
console.log(tantanoo.name); // "Arthy"




// en gros si on dit que <x> c'est une case memoire et que l'obj prend genre 10 cases (au pif) on va avoir:
// const obj1 = { name: "Intrinsic" };
// const obj2 = { name: "Intrinsic" };
// const obj1 = tan; 
// console.log(obj1 === obj2); // false   parcque adresse mémoire utilisée par obj1 est differente de adresse mémoire obj2
// console.log(obj1 === tan); // true   parcque on fait reference à l'adresse mémoire et donc l'adresse mémoire est égale à l'adresse mémoire de obj1


// // "Intrinsic" <0>
// // { name: <0> } <1-9>
// // obj1 = <1-9> // <1> garde uniquement le premier comme reference du rest <1-9>

// // "Intrinsic" <10>
// // { name: <10> } <11-19>
// // obj2 = <11-19> <11>

// console.log(<1> == <11>)  // false
// c'est pour ca que si tu fais const obj2 = obj1 au lieu de recreer (<11-19>) mais dire const obj2 = <1> et si tu update obj1 ou obj2 tu vas modifier la meme partie de la memoire

////////////////////////////////////////////////////////////////////////////////////////////////////
//foncion pure et impures

let user = {firstname: "Tan", lastname:"Bar"};

let getPureName = (userInFn) => {
  return `${userInFn.firstname} ${userInFn.lastname}`;
}
console.log(getPureName (user));
console.log(user);

let getImpureName = (userInFn) => {
  userInFn.name = `${userInFn.firstname} ${userInFn.lastname}`;
  return userInFn.name;
}
console.log(getImpureName(user));
console.log(user);


////////////////////////////////////////////////////////////////////////////////////////////////////



// Using class
class Person {
  constructor(params) {
    this.name = params.name;
    this.age = params.age;
    this.hobbies = params.hobbies;

    countCreated++;
  }
  sayHello () {
    return `Hello my name is ${this.name}, i'm ${this.age}. And i love ${this.hobbies.join(', ')}`;
  }
}

let tanOop = new Person({name: "Tan", age: 30, hobbies: ['Sex', 'Drogs']});
let arthyOop = new Person({name: "Arthy", age: 30});
console.log(tanOop.sayHello());
console.log(`${countCreated} persons as been created`);





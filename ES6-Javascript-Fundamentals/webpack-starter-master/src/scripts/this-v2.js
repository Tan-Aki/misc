// Alright, so, thank you both.

// I think I understand a bit better after a lot of reading.

// It goes way deeper than the original post. We first need to understand the difference between "execution context" and "lexical scope". http://ryanmorr.com/understanding-scope-and-context-in-javascript/

// Then we can start looking at the behavior of "this" in regular and arrow functions.

// In regular fonctions :

// The "this" value changes depending on the "execution context", in other words, the "this" is a reference to who or what called it (usually an object).
// If "nothing" called it, then the "this" has a default value ( that is also dependent on whether we are in node, or a browser, or using a library(not sure for the library but I think?) )
// The "this" value can be explicitly specified with "call()","apply()" and "bind()".
// The "this" value can loose its reference to the object that called it(especially the case in callback functions) and then gets set to the default value

// In arrow functions :

// The arrow function doesn't have its own "execution context"
// The "this" keyword permanently represents the object that defined the arrow function (="enclosing lexical scope").In other words, once it has been defined ( = authored) the value of "this" ALWAYS stays the same.
// The "this" value can never be rebinded. But the other parameters inside the arrow function can them be rebinded with the "bind()" keyword.

// That's why in react the use of arrow functions or the use of ".bind()" is necessary, because we cannot rely on regular fonctions ( in which the "this" keeps changing) to access the attributes of our instantiated object of App class.

// In our specific case, as of why do I get "undefined" when using the regular fonction in the react code, TBT I'm not exactly sure (maybe because of react internal shenanigans) but I can guess it's because of two things :

// "this" lost its "execution context"(in other terms it lost its reference to the object that called it) so it becomes the default ( either "undefined", when in "strict mode", or the "window object" when not in strict mode and in a browser)
// In ES6 classes, the default implicit setting is set to "strict mode", thus we get "undefined".
// Anyways, this is not exhaustive, and I havent understood everything yet, but I now understand a bit better why we need to bind/use arrow fonctions in React and how they work.

// This really helped me get to the bottom of things : - https://blog.bitsrc.io/what-is-this-in-javascript-3b03480514a7

// And also the link mentionned by @brian Thomoson : How to access the correct `this` inside a callback?

// Thank you guys.

// Regards,

console.log("\n" + "////////////////////////////////////////////////////////////////////" + "\n");

console.log(this === global);
// false

console.log(this);
// {}
// Because NodeJS runs your code in a module, and this references the object it creates for your module's exports

console.log("\n" + "////////////////////////////////////////////////////////////////////" + "\n");

(function test() {
  console.log(this === global);
  // true, by default, this === global
  // will be false if written strict mode

  console.log(this);
  // global
  // this is "undefined" when in strict mode
})();

console.log("\n" + "////////////////////////////////////////////////////////////////////" + "\n");

function Hero(heroName, realName) {
  this.realName = realName;
  this.heroName = heroName;
  console.log(this);
}

const superman = Hero("Superman", "Clark Kent");
// this is the global object

console.log(superman);
// undefined

console.log(realName);
// Clark Kent, the variable was created globally;

// if we use strict mode, we will get an error
// JavaScript does not allow us to assign properties realName and heroName to undefined.

console.log("\n" + "////////////////////////////////////////////////////////////////////" + "\n");

function Hero2(heroName, realName) {
  this.realName = realName;
  this.heroName = heroName;
  this.sayHi = function() {
    console.log(this);
  };
  console.log(this);
}
const superman2 = new Hero2("Superman", "Clark Kent");
// Hero2 { realName: 'Clark Kent', heroName: 'Superman' }

console.log(superman2);
// Hero2 { realName: 'Clark Kent', heroName: 'Superman' }

superman2.sayHi();
// Hero2 { realName: 'Clark Kent', heroName: 'Superman' }

// with the new keyword, the this becomes the instance of the object
// we have an instance of "hero2" inside a variable superman2

console.log("\n" + "////////////////////////////////////////////////////////////////////" + "\n");

function Hero3(heroName, realName) {
  console.log(this);
  this.realName = realName;
  this.heroName = heroName;
  console.log(this);
  return {
    heroName: "Batman",
    realName: "Bruce Wayne"
  };
}
const superman3 = new Hero3("Superman", "Clark Kent");
// Hero 3 {}
// Hero3 { realName: 'Clark Kent', heroName: 'Superman' }

console.log(superman3);
// { heroName: 'Batman', realName: 'Bruce Wayne' }

// When a constructor call is made, a new object is created and set as the function’s this argument.
//  The object is then implicitly returned from the function, unless we have another object that is being returned explicitly.

console.log("\n" + "////////////////////////////////////////////////////////////////////" + "\n");

const hero4 = {
  heroNamez: "Batman",
  dialogue() {
    console.log(`I am ${this.heroNamez}!`);
    console.log(this);
  }
};

hero4.dialogue();
// I'm batman!
// { heroName: 'Batman', dialogue: [Function: dialogue] }

// When calling a function as a method of an object, this refers to the object

const saying = hero4.dialogue;
saying();
// I'm undefined!
// global object {}

// the method has lost track of the receiver. this now refers to global instead of hero.

console.log("\n" + "////////////////////////////////////////////////////////////////////" + "\n");

function dialogue2() {
  console.log(`I am ${this.heroName}`);
}
const hero5 = {
  heroName: "Batman"
};

dialogue2.call(hero5);
// I'm batman

dialogue2.apply(hero5);
// I'm batman

// we can also call function with explicit this argument call() and apply()

console.log("\n" + "////////////////////////////////////////////////////////////////////" + "\n");

const hero6 = {
  heroName: "Batman",
  dialogue() {
    console.log(`I am ${this.heroName}`);
  }
};
setTimeout(hero6.dialogue, 1000);
//with 1 sec delay
// I'm udefined

setTimeout(hero6.dialogue.bind(hero6), 1000);
//with 1 sec delay
// I'm batman

// The bind() method allows us to permanently tie a this argument to a value.

console.log("\n" + "////////////////////////////////////////////////////////////////////" + "\n");

const batman = this;
console.log(this);
const bruce = () => {
  console.log(this === batman);
  console.log(this);
};

bruce();
// true
// {}  Because NodeJS runs your code in a module, and this references the object it creates for your module's exports

// The arrow function doesn't have its own "execution context"
// The "this" keyword permanently represents the object that defined the arrow function (="enclosing lexical scope").In other words, once it has been defined ( = authored) the value of "this" ALWAYS stays the same.
// The "this" value can never be rebinded. But the other parameters inside the arrow function can them be rebinded with the "bind()" keyword.

const counter = {
  count: 0,
  increase() {
    setInterval(function() {
      console.log(++this.count);
    }, 1000);
  }
};

counter.increase();
// NaN NaN NaN NaN NaN ....

const counter2 = {
  count: 0,
  increase() {
    setInterval(
      function() {
        console.log(++this.count);
      }.bind(this),
      1000
    );
  }
};

counter2.increase();
// 1 2 3 4 5 ....

const counter3 = {
  count: 0,
  increase() {
    setInterval(() => {
      console.log(++this.count);
    }, 1000);
  }
};

counter3.increase();
// 1 2 3 4 5 ....

console.log("\n" + "////////////////////////////////////////////////////////////////////" + "\n");

class Hero7 {
  constructor(heroName) {
    this.heroName = heroName;
  }
  dialogue() {
    console.log(`And yes, I am ${this.heroName}`);
  }
}
const batman2 = new Hero7("Batman");
batman2.dialogue();
// And yes, I am Batman

// const say2 = batman2.dialogue;
// say2();
// error, The "this" value looses its reference to the object that called it the this argument now refers to undefined.
//The reason for error is that JavaScript classes are implicitly in strict mode

const say3 = batman2.dialogue.bind(batman2);
say3();
// And yes, I am Batman
// we bind the method to the object we want.

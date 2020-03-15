let a = 1;
let b = "2.24"; 


// function add(a,b) {
//   return parseFloat(a) + parseFloat(b);
// }

// on définit le scope de notre fonction
// let add = function (a,b) {
//   return parseFloat(a) + parseFloat(b);
// }

// let add = (a,b) => {
//     return parseFloat(a) + parseFloat(b);
// }



let add = (a,b) => parseFloat(a) + parseFloat(b);


// let sayHello = function (name) {
//     if (name === "Tan"){
//         return "hello le roi"
//     }
//     else{
//         return  "hello" + name;
//     }
// }



// (function () {
//     var x = "Hello!!"; 
//     console.log(x); // I will invoke myself
//   })();



// let sayHello = function (name) {
//     return "hello" + (name === "Tan" ? "le roi" : name);
// }


// let sayHello = name => "hello" +(name === "Tan" ? "le roi" : name );

let sayHello = name => `hello ${name === "Tan" ? "le roi" : name }`;









console.log(add(a,b));
console.log (sayHello("Tan"), sayHello("Arthy"));
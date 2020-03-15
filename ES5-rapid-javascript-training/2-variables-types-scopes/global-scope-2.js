// block scope vs function scope  https://dev.to/sandy8111112004/javascript-introduction-to-scope-function-scope-block-scope-d11

// function scope c'est ce qu'il y'a des les brackets quand déclares une fonction
// block scope c'est quand tu ouvres les brackets tout court ( pour un un if, un for, un do while, switch etc )

// et le let, se limite au block scope
//  alors que le var se limite au function scope

// donc en gros, si tu définies une var dans une block scope, ton var sera accessible dans toute ta function scope
// alors que si tu définies un let dans une block scope, il ne sera pas accessible dans ta function scope

// un petit truc tricky though, c'est que si tu déclares une variable au function scope level, que ça soit un let ou un var, elle sera accessible dans tous les child block scope
// donc, "du haut vers le bas", tu peux utiliser un let ou un var ça sera la même chose
// Mais dès que t'arrives dans ton block level, si tu utilise un let, tu pourras pas l'utiliser quand tu sors de ton block


// il y'a aussi une global scope, qui est la zone en dehors de toutes les fonctions.
// There's only one Global scope in the JavaScript document. The area outside all the functions is consider the global scope
//  and the variables defined inside the global scope can be accessed and altered in any other scopes.

// Une autre chose c'est que le var te permet d'accèder à ton global window object ( dans un browser)
// donc si tu définies : var name = "toto";
// window.name  sera égal à toto
// c'est un peu comme si tu "sortais" de ton block scope grâce à var, pour accèder à l'object global
// alors que let ne te permet pas de faire ça
// mais ça c'est uniquement lorsque tu n'es pas à l'interieur d'une fonction, mais dans la zone du code qui est exterieure à n'importe quelle définition de fonction

// donc en gros, var, c'est au scope "objet" ( ou fonction) alors que let c'est au block scope.




var productId = "PRD-2000";
console.log(productId);
console.log(globalThis.productId); // global scope dans Node


//console.log(this === window); // true in browser


// var description = `hardware product`;

// var updateProduct = () => {
//     description = 'update product';
// }

// updateProduct();
// console.log(description);



let description = `hardware product`;

var updateProduct = () => {
    let description = 'update product';
}

updateProduct();
console.log(description);




var funcs = [];
// var's create 3 functions
for (var i = 0; i < 3; i++) {
  // and store them in funcs
  funcs[i] = function() {
    // each should log its value.
    console.log("My value: " + i);
  };
}
for (var j = 0; j < 3; j++) {
  // and now let's run each one to see
  funcs[j]();
}





function run() {
    var foo = "Foo";
    let bar = "Bar";
  
    {
      var baz = "Bazz";
      let baz2 = "toto";
      foo = "toto";
      bar = "toto";

      console.log(bar);
      console.log(foo);

      {
        var toto2 = "toto";
        let toto3 = "toto";

      }
    //   console.log(baz);
    //   console.log(baz2);
    }
    // console.log(baz2); // reference error
    console.log(baz);
    console.log(toto2);
    // console.log(toto3); // ref error
  }

  run();
//   console.log(baz); // reference error


var func2 = () => {
    var variable2 = "toto";

}
func2();
console.log(variable2);
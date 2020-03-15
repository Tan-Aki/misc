// let factoriel = (num) => num <= 1 ? 1 : num * factoriel(num - 1)
// ----------------------
// Pour pratiquer (petit tips, c'est de la recursivite qu'il faut): exercice 5 !

// je veux une fonction reverseString(str) qui me retourne la string mais inverser:   reverseString("cat") // "tac"let factoriel = (num) => num <= 1 ? 1 : num * factoriel(num - 1)
// ----------------------
// Pour pratiquer (petit tips, c'est de la recursivite qu'il faut): exercice 5 !

// je veux une fonction reverseString(str) qui me retourne la string mais inverser:   reverseString("cat") // "tac"



let reverseString = (str) => {
    return str.split('').reverse().join('');
}

console.log(reverseString('carambar'));





(() => {
     var x = "Hello!!"; 
    console.log(x); // I will invoke myself
  })();


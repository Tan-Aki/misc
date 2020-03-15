var num1 = parseInt ('1010', 2); // with the second paramater : "2", parseInt knows it's a binary number
var num2 = parseInt ('0110', 2);
var total = num1 & num2; // ET bitwise
console.log(total.toString(2));  // 10  // toString(2) pour indiquer que c'est du binaire et que ça soit affiché en binaire




var num1 = parseInt ('1010', 2); // with the second paramater : "2", parseInt knows it's a binary number
var num2 = parseInt ('0110', 2);
var total = num1 | num2;   // OU bitwise
console.log(total.toString(2));  // 1110  // toString(2) pour indiquer que c'est du binaire et que ça soit affiché en binaire




var num1 = parseInt ('1010', 2); // with the second paramater : "2", parseInt knows it's a binary number
var num2 = parseInt ('0110', 2);
var total = num1 ^ num2;   // OU exclusif bitwise
console.log(total.toString(2));  // 1100  // toString(2) pour indiquer que c'est du binaire et que ça soit affiché en binaire


var num1 = parseInt ('0011001100101001100111', 2);
num1 = num1<<2;  // on ajoute 2 0 à la fin 
console.log(num1.toString(2));  //  1100110010100110011100



var num1 = parseInt ('00110011001010011001111', 2);
num1 = num1 >> 3;  // on enlève 3 digits 
console.log(num1.toString(2));  //  110011001010011001




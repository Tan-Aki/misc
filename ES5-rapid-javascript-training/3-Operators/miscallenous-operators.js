var total = 6;
total += 4; // 10  
total -= 3; // 7
total *= 3; // 21
total /= 3; // 7
total %= 3; // 1
total <<= 2; // add two 0 to the bit value,  so it was 1, now the bit value is 100, so  4
total >>= 1 // 2 
total *= 3+1; // 8  c'est comme si on faisait (3+1) voir la table de précédence en JS // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
// utiliser les parenthèses le plus possible ! 
total *= (3+1); // 32

var total = 99, tax = 9; 
var total = (99,88,44);  // 44 DONT USE THIS 

console.log(total, tax);
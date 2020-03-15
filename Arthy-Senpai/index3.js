
let add = (a,b) => parseFloat(a) + parseFloat(b);

let minus = (a,b) => parseFloat(a) - parseFloat(b);


console.log (minus(3,2));
console.log (add(1,2));

console.log ("5-(4+2)");
console.log (minus(5, add(4,2)));

console.log ("(5-4)+2");
console.log (add (minus(5,4),2));
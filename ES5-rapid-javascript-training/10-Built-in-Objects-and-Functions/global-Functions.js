var value = parseInt('1234');
console.log(value);



var value = parseInt('1234.444');
console.log(value);


var value = parseInt('b1234.444'); // NaN
var value = parseInt('12z34'); // 12
var value = parseInt(' '); // NaN
var value = parseInt('C000', 16); // 49152 which is the decimal form of the C000 hexadecimal number


var value = parseFloat('1234.444'); // 1234.444

var value = parseFloat('z1234.444'); // NaN
var value = parseFloat('1234.444e-1'); // 123.4444 


var value = isFinite(Number.POSITIVE_INFINITY); // False
var value = isFinite(42); // true
var value = isFinite(9/0); // false, it's infinite

var value = isNaN(NaN); // true
var value = isNaN(9/0); // false


var path = "\\start\\";
console.log(encodeURI(path)); //%5Cstart%5C

var path = encodeURI("\\start\\+"); //%5Cstart%5C+

var path = "\\start\\+";
console.log(encodeURIComponent(path)); //%5Cstart%5C%2B

var path = "%5Cstart%5C+";
console.log(decodeURI(path)); // \start\+

var path = "%5Cstart%5C%2B";
console.log(decodeURIComponent(path)); // \start\+



var globalVar = 'foo';
var code = 'console.log(globalVar)';
eval(code); // foo   // avoid eval in production 
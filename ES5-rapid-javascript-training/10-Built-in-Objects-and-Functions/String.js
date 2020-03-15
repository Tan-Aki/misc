var value = 'My String';

console.log(value.charAt(3)); // S


console.log(value.concat(' Lives ! ')); // My string Lives !  
console.log(value.includes(' ')); // true
console.log(value.endsWith('ing')); // true
console.log(value.endsWith('ing ')); // false
console.log(value.indexOf('M')); // 0 
console.log(value.indexOf('Z')); // -1 


var value = 'Some String';
console.log(value.lastIndexOf('S')); // 5 
console.log(value.slice(5)); // String
console.log(value.slice(-3)); // ing
console.log(value.slice(5,8)); // Str
console.log(value.split(' ').length); // 2  // an array of  ['Some', 'String']
console.log(value.substr(0,4)); // Some  // start and length
console.log(value.substring(5,6)); // S    // start and end ending index is not inclusive
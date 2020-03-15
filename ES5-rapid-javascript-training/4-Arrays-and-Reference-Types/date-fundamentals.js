//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date


var dt = new Date();
console.log(dt); // current date :  2020-01-09T16:35:45.170Z


var dt = new Date(0);
console.log(dt); // 1970-01-01T00:00:00.000Z


var dt = new Date(2/13/2015);
console.log(dt); 

var dt = new Date('March 1,2015');
console.log(dt);


var dt = new Date('Hi Mom !');
console.log(dt); //invalid date

var dt = Date.parse('Hi Mom!');
console.log(dt); // NaN

var dt = Date.UTC(2000,0); // 946684800000 seconds since january 1 1970
var dt = new Date(Date.UTC(2000,0)); // 2000-01-01T00:00:00.000Z
console.log(dt);

var dt = Date.now(); // 1578588080881   seconds since january 1 1970
console.log(dt);

var dt = new Date();
console.log(dt.toDateString()); // simplified date 
console.log(dt.toTimeString()); // simplified date 
console.log(dt.getFullYear()); // juste l'année 
dt.setUTCFullYear(2025);



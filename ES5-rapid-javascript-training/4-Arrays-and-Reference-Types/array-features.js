var ratings = [];
ratings.push(5);
ratings.push(2,4); // [5,2,4]
ratings.pop(); // [5,2]
ratings.shift() // [2]
console.log(ratings);
ratings.unshift(3); // [3,2]
console.log(ratings);

var ratings = [3,2,1];
var newRatings = ratings.concat([4,5,6],7,8); // [3,2,1,4,5,6,7,8]  // concat doesnt change the value of ratings
console.log(newRatings);


var ratings = [3,2,1,4];
var newRatings = ratings.slice(2); // [ 1, 4 ]   here, 2 is the index   // slice doesnet modify the existing array
console.log(newRatings);



var ratings = [3,2,1,4];
var newRatings = ratings.slice(1,3); // [ 2, 1 ]   slice in between the 2 indexes
console.log(newRatings);


var ratings = [3,2,1,4];
var newRatings = ratings.slice(-2); // [ 1,4]   les 2 derniers elements 
console.log(newRatings);



var ratings = [3,2,1,4];
ratings.splice(1,2); // [3,4],  on commence à l'index 1, et on supprime 2 values   original array is getting modified.


var ratings = [3,2,1,4];
var newRatings = ratings.splice(0,1)
console.log(newRatings); // [3], 


var ratings = [3,2,1,4];
ratings.splice(2,0,99)  // on ajoute à l'index 2
console.log(ratings); // [3,2,99,1,4], 

var ratings = [3,2,1,4];
ratings.splice(2,1,99)
console.log(ratings); // [3,2,99,4],  on remplace à l'index 2


var ratings = [3,2,1,4];
ratings.splice(2,0,99,100,101)  // on ajoute à l'index 2
console.log(ratings); // [3,2,99,100, 101, 1,4], 

var ratings = [3,2,1,4];
ratings.reverse(); // reverse
ratings.sort() // sort du plus petit au plus grand

var ratings = [3,2,1,4,10];
ratings.sort() // 1,10,2,3,4

var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a-b});
console.log(points);

var ratings = [1,2,3,4,3]
console.log(ratings.indexOf(3)); // 2 
console.log(ratings.lastIndexOf(3)); // 4 


var ratings = [1,2,3,4]
console.log(ratings.indexOf('3')); // -1 
console.log(ratings.indexOf(66)); // -1 


 





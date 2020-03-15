
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

var blogText = "Sam I Am"
var pattern = new RegExp('am', 'g')  // same as :   var pattern = /am/g;
console.log(pattern)

var blogText = "Sam I Am"
var pattern = /am/g;
console.log (pattern.test(blogText)); // true, pattern "am" matches


var blogText = "Sam I Am"
var pattern = /bam/g;
console.log (pattern.test(blogText)); // false, pattern "bam" doesn't match


var blogText = "Sam I Am"
var pattern = /m/g;
console.log (pattern.test(blogText)); // true, pattern "m" matches, 
console.log (pattern.test(blogText)); // true, pattern "m" matches, continues where it left of
console.log (pattern.test(blogText)); // false, pattern "m" doesn't match


var blogText = "Sam I Am"
var pattern = /m/g;
console.log(pattern.exec(blogText)); // [ 'm', index: 2, input: 'Sam I Am', groups: undefined ]


var blogText = "Sam I Am"
var pattern = /m/g;
console.log (pattern.exec(blogText).index); //2  (le premier m)
console.log (pattern.exec(blogText).index); //7  (le deuxième m)

var blogText = "Sam I Am"
var pattern = /m/g;
var result = pattern.exec(blogText);
console.log(result.index); // 2 
result = pattern.exec(blogText);
console.log(result.index); // 7
console.log(result.input);



var blogText = "Sam I Am"
var pattern = /m/g;
var result = pattern.exec(blogText);
while (result) {
    console.log(result.index);
    result = pattern.exec(blogText);
}



var blogText = "Sam I Am"
var pattern = /am/g;
var result = blogText.match(pattern);
console.log(result);  //case sensitive


var blogText = "Sam I Am"
var pattern = /am/gi; //global and case insensitive
var result = blogText.match(pattern);
console.log(result);

var blogText = "Sam I Am"
var pattern = /[aA]m/g; 
var result = blogText.match(pattern);
console.log(result);


var blogText = "Sam I Am"
var pattern = /.m/g;  // . is any symbol
var result = blogText.match(pattern);
console.log(result);
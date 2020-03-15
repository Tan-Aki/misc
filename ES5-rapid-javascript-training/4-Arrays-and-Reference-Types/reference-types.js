var n = 42;
var a = n; // primitive value, they both have their own memory location with the number 42 inside

console.log(a == n); // true
console.log(a === n); // true

a = 9;  

console.log(a == n); // false
console.log(a === n); // false 


var obj = {
    name : "Jill",
};

var obj2 = obj;  //  non primitive value, they 

console.log(obj == obj2); // true
console.log(obj === obj2); // true

obj2.name = "John";  // changes the property of obj.name too.

console.log(obj == obj2); // true
console.log(obj === obj2); // true




var blog = { 
    name : `Ski Utah`,
}

var changeBlogName = (localBlog) => {
    localBlog.name = `No Name`;
}
changeBlogName(blog);
console.log(blog.name); // no Name      functions can modify reference types


var a1 = [1,2,3];
var a2 = a1;
a1[0] = 99;
console.log(a2[0]); // 99   arrays are objects ( or reference types);


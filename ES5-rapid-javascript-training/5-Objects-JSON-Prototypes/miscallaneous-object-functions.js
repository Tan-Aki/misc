'use strict';

var project = {
    name : 'Top secret proj',
    dueDate : '1/1/2016',
};

console.log(project.hasOwnProperty('name')); // true
console.log(project.hasOwnProperty('toString')); // false
console.log(Object.prototype.isPrototypeOf(project)); // true 



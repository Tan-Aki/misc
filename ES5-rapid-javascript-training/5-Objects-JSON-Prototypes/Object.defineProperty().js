'use strict';

let obj = {};
obj.foo = "bar";
obj.toto = "toto";

console.log(Object.getOwnPropertyDescriptor(obj, 'foo'));  // { value: 'bar', writable: true, enumerable: true, configurable: true }


var task = {};
Object.defineProperty(task, 'text', {
    value: 'Get this job done!',
    writable: true,
});

console.log(task.text); // Get this job done ! 
task.text = task.text + ' ... NOW !';
console.log(task.text); // Get this job done ! ... NOW ! 


var task = {};
Object.defineProperty(task, 'text', {
    value: 'Get this job done!',
    // writable: true,
});

console.log(task.text); // Get this job done ! 
// task.text = task.text + ' ... NOW !'; // TypeError : cannot assign to read only property
console.log(task.text); // Get this job done !



var task = {};
Object.defineProperty(task, 'text', {
    value: 'Get this job done!',
    enumerable:true,
});

for (var f in task)
console.log(f);  // text




var task = {};
Object.defineProperty(task, 'text', {
    value: 'Get this job done!',
    //    enumerable:true,
});

for (var f in task)
console.log(f);  // (nothing shows, enumerable must be set to true)



// var task = {};
// Object.defineProperty(task, 'text', {
//     value: 'Get this job done!',
//     configurable: false,
// });
// Object.defineProperty(task, 'text', {
//     value: 'Done !',
// });

// console.log(task.text); // Error, configurable is at false
        
        

// getter and setters, should not be used, we are in freaking JS !
var toto = {
    _dueDate: '1/15/16',
    get DueDate() {return this._dueDate},
    set DueDate(newValue) {this._dueDate = newValue},
};
// now let's write getters and and setters in anoher way
Object.defineProperty(toto, 'dueDate', {
    get () {
        return this._dueDate;
    },
    set (newValue) {
        this._dueDate = newValue;
    }
});

toto.dueDate = '2/2/16';
console.log('dueDate : ' + toto.dueDate); // 2/2/16
toto.DueDate = '3/2/16';
console.log('dueDate : ' + toto.dueDate); // 1/15/16

        
        
var task = {};
Object.defineProperties(task, {
    'text': {
    value: 'new task',
    },
    'dueDate' : {
        value: '2/2/16'
    }
});
console.log(task.text + ' Due : ' + task.dueDate);
console.log(typeof Object); // function


// Attention ! ES5 typo
var Employee = function (name,boss){
    this.name = name;
    this.boss = boss;
    this.giveRaise = function () {

    };
}
Employee.prototype.giveRaise2 = function (){
};



var newEmployee = new Employee('JJ','AA');
var newEmployee2 = new Employee('BB', 'CC');
console.log(typeof newEmployee);
console.log(newEmployee.name, newEmployee.boss);
console.log( newEmployee.__proto__ === newEmployee2.__proto__);
console.log( newEmployee.giveRaise === newEmployee2.giveRaise); // false
console.log(typeof Employee.prototype); // on a accès au prototype d'un constructeur, mais pas d'un objet ( accessible avec __proto__)
console.log ( newEmployee.giveRaise2 === newEmployee2.giveRaise2);





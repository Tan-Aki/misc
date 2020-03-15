'use strict';

var salaryUpdater = function (salary) {
    var currentSalary = salary;
    var generator = function () {
        currentSalary *= 2;
        return currentSalary;
    }
    return generator;
};

let toto = salaryUpdater(1000);
toto()
console.log(toto());
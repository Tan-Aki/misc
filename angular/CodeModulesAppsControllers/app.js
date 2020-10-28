////////////////////////////////////////////////////////////////////////////
////////// You can add variables to the scope //////////////////////////////
////////////////////////////////////////////////////////////////////////////

// // MODULE
// // person = 'tony';
// var angularApp = angular.module('angularApp', []);

// // CONTROLLERS
// angularApp.controller('mainController', [
//     '$scope',
//     function ($scope) {
//         $scope.name = 'Jane Doe';
//         $scope.occupation = 'Coder';
//         $scope.getName = function () {
//             console.log('John Doe')
//         };

//         $scope.getName()

//         console.log($scope);
//     },
// ]);

// // logPerson();

////////////////////////////////////////////////////////////////////////////
//////////                                    //////////////////////////////
////////////////////////////////////////////////////////////////////////////

// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', function ($scope) {}]);

var searchPeople = function (firstName, lastName, height, age, occupation) {
    return 'Janes Doe';
};

console.log(searchPeople(1, 2, 3, 4, 5)); // Janes Doe

console.log(searchPeople); // ƒ (firstName, lastName, height, age, occupation) {return 'Janes Doe';}

var searchPeopleString = searchPeople.toString();

console.log(searchPeopleString); // function (firstName, lastName, height, age, occupation) {return 'Janes Doe';}

console.log(angular.injector().annotate(searchPeople)) //["firstName", "lastName", "height", "age", "occupation"]

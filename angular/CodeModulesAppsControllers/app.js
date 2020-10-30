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
//////////     dependency Injection and scope service         //////////////
////////////////////////////////////////////////////////////////////////////

// // MODULE
// var angularApp = angular.module('angularApp', []);

// // CONTROLLERS
// angularApp.controller('mainController', ['$scope', function ($scope) {}]);

// var searchPeople = function (firstName, lastName, height, age, occupation) {
//     return 'Janes Doe';
// };

// console.log(searchPeople(1, 2, 3, 4, 5)); // Janes Doe

// console.log(searchPeople); // ƒ (firstName, lastName, height, age, occupation) {return 'Janes Doe';}

// var searchPeopleString = searchPeople.toString();

// console.log(searchPeopleString); // function (firstName, lastName, height, age, occupation) {return 'Janes Doe';}

// console.log(angular.injector().annotate(searchPeople)) //["firstName", "lastName", "height", "age", "occupation"]

////////////////////////////////////////////////////////////////////////////
//////////      log Services                            ///////////
////////////////////////////////////////////////////////////////////////////
// // MODULE
// var angularApp = angular.module('angularApp', []);

// // CONTROLLERS
// angularApp.controller('mainController', [
//     '$scope',
//     '$log',
//     function ($scope, $log) {
//         console.log($log);
//         $log.log("hello !")
//         $log.info("info !")
//         $log.warn("warn !")
//         $log.debug("debug !")
//         $log.error("error !")


//     },
// ]);


////////////////////////////////////////////////////////////////////////////
//////////      other Services                            ///////////
////////////////////////////////////////////////////////////////////////////
// // MODULE
// var angularApp = angular.module('angularApp', []);

// // CONTROLLERS
// angularApp.controller('mainController', [
//     '$scope',
//     '$log',
//     '$filter',
//     function ($scope, $log, $filter) {


//         $scope.name = "John"
//         $scope.formattedName = $filter('uppercase')($scope.name)

//         $log.log($scope.name)
//         $log.log($scope.formattedName)




//     },
// ]);

////////////////////////////////////////////////////////////////////////////
//////////      other Services not included by default in angular but that work with it ///////////
////////////////////////////////////////////////////////////////////////////
// MODULE
var angularApp = angular.module('angularApp', ['ngMessages']);

// CONTROLLERS
angularApp.controller('mainController', [
    '$scope',
    '$log',
    '$filter',
    function ($scope, $log, $filter) {


        $scope.name = "John"
        $scope.formattedName = $filter('uppercase')($scope.name)

        $log.log($scope.name)
        $log.log($scope.formattedName)




    },
]);

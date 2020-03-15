


var project = new Object();
var project = {};

project.name = "Project Phoenix";
project.securityLevel = 15;
project.updateDueDate = () => {return true};

var project = {
    name : "Project Phoenix",
    securityLevel : 15,
    updateDueDate : () => {return true},
}

console.log(project.updateDueDate()); // true
console.log(project['securityLevel']); // 15
console.log(project[0]) // undefinied
// console.log(project[name]); // ref error : variable name doesn't exist

var field = 'securityLevel';
console.log(project[field]); // 15




var project = {
    name : "Project Phoenix",
    securityLevel : 15,
    updateDueDate : () => {return true},
    team : ['iguanaboy', 'cactusboy','toto'],
}

console.log(project.team[2]); // toto


var project = {
    tasks: [
        {
            taskName: 'first'
        },
        {
            taskName: 'second'
        }
    ],
};

console.log(project.tasks[1].taskName); // second





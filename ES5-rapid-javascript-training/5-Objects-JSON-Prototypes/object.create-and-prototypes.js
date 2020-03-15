var project = {
    securityLevel: 2,
};

var secretProject = Object.create(project); // prototype of secretProject is set to "project"

console.log(secretProject.securityLevel); // securityLevel exists in the prototype "project"
console.log(secretProject.toString()); // toString exists in the prototype of the prototype "project" ( = Object.protoype = prototype.prototype)
console.log(secretProject.__proto__.__proto__ === Object.prototype);

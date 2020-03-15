// immeditately invoked function expressions.
// pour invoker des fonctions dès le debut

(function (){
    console.log('Executed !');
    }
)();


(function (){
    console.log('Executed !');
}
());


(function (){
    var employeeName = 'Jill';
    }
)();

// console.log(employeeName); // doesnt work


var app = {};
var jQuery = {};

(function (ns, $) {
    ns.name = 'None';
    console.log($ === jQuery)
})(app, jQuery);

console.log(app.name, jQuery); // it works because objects can be modified outside of ()

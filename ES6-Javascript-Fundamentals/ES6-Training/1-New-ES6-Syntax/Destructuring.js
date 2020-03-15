var tab = [1,2,3,4];
var [first,second,...rest] = tab;
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3,4]



let tab2 =  [1,2];
let [ffirst,ssecond,tthird] = tab2;
console.log(tthird); // undefined


let tab3 =  [1,2,3];
let [fffirst,,ttthird] = tab3;
console.log(ttthird); // 3


let tab4 =  [1,2];
let [ffffirst,ssssecond,tttthird = 3 ] = tab4;
console.log(tttthird); // 3

// starting here we will use var instead of let so that we can re-declare the same variables

var tab = [1,2,[3,4]];
var [first,second,[third,fourth]] = tab;
console.log(third); // 3

var reviewSalary = function ([low, average],high = '88000'){
    console.log(average);
}
reviewSalary(['32000','50000']);




var salary = {
    low : '32000',
    average : '50000',
    high : '75000'
};

var {low,average,high} = salary;
var {low: newLow,average : newAverage, high: newHigh} = salary;
console.log(high); //75000
console.log(newAverage); // 50000

var newLow, newAverage,newHigh;
// for assignments only, we need to use the parenthesis
({low: newLow,average : newAverage, high: newHigh} = salary);
console.log(newHigh);

let [firstLetter, secondLetter] = 'AZ';
console.log('first letter : ' + firstLetter + ' second letter : ' + secondLetter);






///////////////////////////////////////////////////////////////////
// Arthy exemples
///////////////////////////////////////////////////////////////////
let arrOfBigObjects = [
    {nani: "nana", foo: "bar", name: "Arthy"},
    {name: "Tan", pouet:"okok"},
    {nani: "nana",  name: "Paul", barbar:'foo'},
 ];
 
 let newArray = arrOfBigObjects.map(({name}) => name); // ["Arthy", "Tan", "Paul"];
 console.log(newArray);


 const arrOfBigObjects2 = [
    {nani: "nana", foo: "bar", name: "Arthy"},
    {name: "Tan", pouet:"okok"},
    {nani: "nana",  name: "Paul", barbar:'foo', foo: "Foufou"},
    undefined
 ];
 
 console.log(arrOfBigObjects2.map(({name, foo="DefaultFoo"}={name:"NoName"}) => `${name}-${foo}`)); 
 // > (4) ["Arthy-bar", "Tan-DefaultFoo", "Paul-Foufou", "NoName-DefaultFoo"]
 // "Si l'argument a deconstruire n'exist pas, alors met en valeur par default  un object {} (qui sera deconstruit, et tu pourras mettre les valeurs des attribues par default)
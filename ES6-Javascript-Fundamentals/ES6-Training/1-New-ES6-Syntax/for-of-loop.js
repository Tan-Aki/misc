// for in : use with objects,  can work on array and string but not advised. object muse have Enumerable set to true
// for of : use with array and strings. doesnt work on objects.  object must have a  [symbol.iterator] property

var items = ['it1', 'it2'];

for (var item of items){
    console.log(item);
}
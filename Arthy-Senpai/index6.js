// let add = function(...a) {
//     return a.reduce(function (accumulateur, currentValue, i, arr) { 
//         console.log(` REDUCE accumulateur:${accumulateur} / currentValue:${currentValue} / i:${i} / arr:${arr}`)
//         return accumulateur + currentValue;
//     }, 0);
// }



let add = (...a) => a.reduce((acc, el) => acc + parseFloat(el), 0);

console.log(add(1,`2`,3));
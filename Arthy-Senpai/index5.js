console.log(` traitement de tableau `);


// let add = (...a) => {
//     console.log("a =", a);
//     let sum = 0
//     for ( i=0;i < a.length; i++) {
//         let item = a[i];
//         sum+= item;
//         //sum = a[i] + sum;
//     }
//     return sum;
// }

let add = (...a) => {
    let sum = 0;
    // a.forEach(function(item, i, a) {
        //   sum += item;
    // });
    a.forEach((item, i) => { sum += item });
    return sum;
}
console.log(add(1,2,3));

let names = [`Arthy`, `Tan`];
let helloNames = names.map((name, i) => `Hello ${name} (index:${i})`);
console.log(names, helloNames);


let calcul = (fn, nombres) => {
    return fn(...nombres);
}

let nums = [10,20,30];
console.log(nums, `+5 = `, nums.map(n => calcul(add, [n, 5])));

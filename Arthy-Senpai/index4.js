// let add = (a,b,c) => parseFloat(a) + parseFloat(b) + parseFloat(c);


let add = (...a) =>{
    //console.log("a="+ a);   not good
    console.log("a =", a);
    let sum = 0
    for (let i=0;i < a.length; i++) {
        sum+= a[i];
        //sum = a[i] + sum;
    }
    return sum;
}



//console.log(add(1,2,3));


// let minus = (...a) =>{
//     //console.log("a="+ a);   not good
//     console.log("a =", a);
//     let sum = a[0]
//     for ( i=1;i < a.length; i++) {
//         sum-= a[i];
//         //sum = sum - a[i];
//     }
//     return sum;
// }

let minus = (sum,...a) =>{
        //console.log("a="+ a);   not good
        console.log("sum = ", sum, "a =", a);
    
        for ( i=0;i < a.length; i++) {
                sum-= a[i];
                //sum = sum - a[i];
            }
    return sum;
}

//console.log(minus(1,2,3));


let calcul = (fn,nombres) => {
    return fn(...nombres);
}


console.log(calcul(add, [1,2,3]));

let n = [1,2,3];
let n2 = [n];
let n3 = [...n];
let n4 = [...n, n, ...n];

console.log('n:', n);
console.log('n2:', n2);
console.log('n3:', n3);
console.log('n4:', n4);






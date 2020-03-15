var total = 99.99;
var freeShipping = false;


if (total >=50.00){
    var foo = 10;
    let foofoo = 15;
    const bar = 20;
    freeShipping = true;
}

console.log(freeShipping);
console.log(foo);
// console.log(foofoo);
// console.log(bar);






var total2 = 99.99;
var freeShipping2 = false;


if (total2 >=100.00)
    freeShipping2 = true;


console.log(freeShipping2);




var total3 = 99.99;
var freeShipping3;
var savings;


if (total3 >=100.00){
    freeShipping3 = true;
    savings = 29.99;
}
else {
    freeShipping3 = false;
    savings = 0
}
    


console.log(freeShipping3);
console.log(savings);


let orderType = `business`;
let shipMethod;

if (orderType === `business`)
    shipMethod = `FedEx`;
else if (orderType === 'personal')
    shipMethod = `UPS Ground`;
else 
    shipMethod = `USPS`;

console.log(shipMethod);



let orderType2 = `business`;
let shipMethod2;

switch (orderType2){
    case 'business':
        shipMethod2 = `FedEx`;
        break;
    case 'personal':
        shipMethod2 = `UPS Ground`;
        break;
    default:
        shipMethod2 = 'USPS';
}

console.log(shipMethod2);




let orderType3 = `unknown`;
let shipMethod3;

switch (orderType3){
    case 'business':
        case 'personal':
            shipMethod3 = `UPS Ground`;
            break;
    default:
        shipMethod3 = 'USPS';
    }
    
    console.log(shipMethod3);
    
    
    
    
    let orderTotal = 100;
    let discount;
    
    switch (true){
        case orderTotal >= 50 && orderTotal < 75:
            discount = 10 ;
            break;
        case orderTotal >= 75 && orderTotal < 100:
            discount = 20 ;
            break;
        case orderTotal >= 100:
            discount = 30 ;
            break;
        default:
            discount = 0;
    }
    
    console.log(discount);
    


    var age = 17;
    var beverage = (age >= 18) ? "beer" : "juice";
    console.log(beverage);
    
    
    
    
    
    
    
    
    
    
    





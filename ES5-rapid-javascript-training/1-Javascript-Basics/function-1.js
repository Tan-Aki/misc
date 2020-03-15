



let printOrder = () => {
    console.log("printer order.");
    };
printOrder();

let printOrder2 = (orderId) => {
    console.log("printer order." + orderId);
};

printOrder2(`9001`);



let printOrder3 = (orderId) => {
    console.log("printer order." + orderId);
};
printOrder3(`9001`);


let calcTotalPrice = (quantity, price) => {
    return console.log('Total price ' + (quantity * price));

};

calcTotalPrice(2,4.00);





let calcTotalPrice2 = (quantity, price, currency) => {
    return console.log(currency);

};

calcTotalPrice2(2,4.00); // undefined




let calcTotalPrice3 = (quantity, price) => {
    return (quantity * price);

};

let totalPrice = calcTotalPrice3(2,4.00);
let totalPrice2 = calcTotalPrice3(3,5.00);
console.log(totalPrice, totalPrice2);


getOrder = () => {};

var order = getOrder();
console.log(order);



var activateOrder = () => {
    console.log(`order activated.`);
}

activateOrder();
console.log(typeof activateOrder);
activateOrder; //nothing shows













var button = document.querySelectorAll('button')[0];
var buttonSub = document.querySelectorAll('button')[1];
var buttonMul = document.querySelectorAll('button')[2];
var input1 = document.getElementById('num1');
var input2 = document.getElementById('num2');
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener('click', function () {
    console.log(add(+input1.value, +input2.value));
});
var substract = function (num1, num2) {
    return num1 - num2;
};
// multiply function
var multiply = function (num1, num2) {
    return num1 * num2;
};
// add multiply and substract functions to their respective buttons
buttonSub.addEventListener('click', function () {
    console.log(substract(+input1.value, +input2.value));
});
buttonMul.addEventListener('click', function () {
    console.log(multiply(+input1.value, +input2.value));
});

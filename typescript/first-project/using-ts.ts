const button = document.querySelectorAll('button')[0];
const buttonSub = document.querySelectorAll('button')![1];
const buttonMul = document.querySelectorAll('button')![2];

const input1 = <HTMLInputElement>document.getElementById('num1');
const input2 = <HTMLInputElement>document.getElementById('num2');

function add(num1: number, num2: number) {
    return num1 + num2;
}

button!.addEventListener('click', function () {
    console.log(add(+input1!.value, +input2!.value));
});

const substract = (num1: number, num2: number) => {
    return num1 - num2;
};

// multiply function
const multiply = (num1: number, num2: number) => {
    return num1 * num2;
};

// add multiply and substract functions to their respective buttons
buttonSub!.addEventListener('click', function () {
    console.log(substract(+input1!.value, +input2!.value));
});

buttonMul!.addEventListener('click', function () {
    console.log(multiply(+input1!.value, +input2!.value));
});

let action = prompt('Please choose opetration add, sub, div, mult: ');

let firstNumber = Number(prompt('Enter first number: '));
let secondNumber = Number(prompt('Enter second number: '));

if (action == 'add') {
    alert(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
} else if (action == 'sub'){
    alert(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
} else if (action == 'div') {
    alert(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
} else if (action == 'mult') {
    alert(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
}
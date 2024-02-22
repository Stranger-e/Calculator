let buttons = document.querySelectorAll('button');
let display = document.querySelector('.display');
let clearBtn = document.getElementById('clear');
let numbers = document.querySelectorAll('.num');
let operand = document.querySelectorAll('.operand')
let equals = document.getElementById('equals')

let currentNumber = '';
let firstNumber = '';
let operation = '';
let secondNumber = '';


const add = function(a, b){
    return a + b;
} 

const subtract = function(a, b){
    return a - b;
}

const multiply = function(a, b){
    return a * b;
}

const divide = function (a, b){
    return a / b;
}

console.log(divide(6, 3))



function operate(a, b, operator){

    a = parseFloat(a);
    b = parseFloat(b);

    if(operator == '+'){
        return add(a, b);
    }

    else if (operator == '-'){
        return subtract(a, b);
    }

    else if (operator == '*'){
        return multiply(a, b);
    }

    else if (operator == '÷' ){
        if (b === 0) {
            return 'Error!';
        }

        return divide(a, b);
    }

    else{
        return 'Error'
    }
}


numbers.forEach(function(numbers){
    numbers.addEventListener('click', function(){
        updateDisplay(numbers.innerHTML);
    })
});

operand.forEach(function(button){
    button.addEventListener('click', function(){
        chooseOperation(button.innerHTML);
        display.value = '';
    });
});

function roundResult(result){
    if (typeof result === 'number' && !isNaN(result)){
        return parseFloat(result.toFixed(8));
    }

    else {
        return result;
    }
}

function chooseOperation(op){
    let result;


    if (firstNumber === ''){
        firstNumber = currentNumber;
        currentNumber = '';
        operation = op;
    }


    else {
        secondNumber = currentNumber;
        currentNumber = '';

        let result = operate(firstNumber, secondNumber, operation);

        display.value = result;
        
        firstNumber = result;
        operation = op;
    }
}

function updateDisplay(value){
    if (value === '.' && currentNumber.includes('.')) return
    currentNumber += value;
    display.value = currentNumber;

}

equals.addEventListener('click', function(){
   if (firstNumber !== '' && operation !== '' && currentNumber !== ''){
    secondNumber = currentNumber;
    let result = operate(firstNumber, secondNumber, operation);
    display.value = roundResult(result);
   } 
});

clearBtn.addEventListener('click', function(){
    display.value = '';
    currentNumber = '';
    firstNumber = '';
    secondNumber = '';
    operation = '';
});



let buttons = document.querySelectorAll('button');
let display = document.querySelector('.display');
let clearBtn = document.getElementById('clear');
let numbers = document.querySelectorAll('.num');
let operand = document.querySelectorAll('.operand')


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

let currentnumber = display.value;
let firstNumber = ''
let secondNumber = ''

function operate(firstNumber, secondNumber){
    if('+' == true ){
        add(firstNumber, secondNumber);
    }

    else if ('-' == true ){
        subtract(firstNumber, secondNumber);
    }

    else if ('*' == true ){
        divide(firstNumber, secondNumber);
    }

    else if ('/' == true ){
        divide(firstNumber, secondNumber);
    }
}


numbers.forEach(function(numbers){
    numbers.addEventListener('click', function(){
        updateDisplay(numbers.innerHTML);
    })
});

function chooseOperation(button){
    if (button.innerHTML == '+'){
        operation = '+'
    }

    else if(button.innerHTML == '-'){
        operation = '-' 
    } 

    else if(button.innerHTML == '*'){
        operation = '*'
    } 

    else if(button.innerHTML == '÷'){
        operation = '/'
    } 

    firstNumber = currentnumber;
    currentnumber = ''
}
operand.forEach(function(button){
    button.addEventListener('click', function(){
        chooseOperation(button.innerHTML);
        updateDisplay(button.innerHTML)
    })
})

function updateDisplay(value){
    if (value === '.' && currentnumber.includes('.')) return
    display.value += value;

}



clearBtn.addEventListener('click', function(){
    display.value = '';
})



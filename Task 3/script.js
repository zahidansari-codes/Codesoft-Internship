let currentInput = '';
let previousInput = '';
let operation = null;

const display = document.getElementById('display');

function appendNumber(number) {
    if (currentInput === '0') {
        currentInput = '';
    }
    currentInput += number;
    updateDisplay();
}

function chooseOperator(op) {
    if (currentInput === '') return;
    
    if (previousInput !== '') {
        compute();
    }
    
    operation = op;
    previousInput = currentInput;
    currentInput = '';
}

function compute() {
    let computation;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    
    if (isNaN(prev) || isNaN(current)) return;

    // Yahan humne naye operators ka logic add kiya hai
    switch (operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current; // Multiplication
            break;
        case '/':
            if (current === 0) {
                alert("Zero se divide nahi kiya ja sakta!");
                clearDisplay();
                return;
            }
            computation = prev / current; // Division
            break;
        default:
            return;
    }

    currentInput = computation.toString();
    operation = null;
    previousInput = '';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    previousInput = '';
    operation = null;
    updateDisplay();
}

function updateDisplay() {
    display.value = currentInput || '0';
}
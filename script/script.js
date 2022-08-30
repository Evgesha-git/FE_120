/**
 * Доработать:
 * множественный ввод операций подряд
 * решить проблему 0.1 и 0.2
 */

const calculator = {
    displayValue: '0',
    firsOperand: null,
    waitingSecodOperand: false,
    operator: null,
};

const allCalculation = {
    '+': (firsOperand, secondOperand) => firsOperand + secondOperand,
    '-': (firsOperand, secondOperand) => firsOperand - secondOperand,
    '/': (firsOperand, secondOperand) => firsOperand / secondOperand,
    '*': (firsOperand, secondOperand) => firsOperand * secondOperand,
    '%': (firsOperand, secondOperand) => firsOperand * (secondOperand / 100),
    '=': (firsOperand, secondOperand) => secondOperand,
    '+/-': (firsOperand, secondOperand) => secondOperand >= 0 ? -secondOperand : +secondOperand,
};

const handleOperator = (nextOperator) => {
    const {
        firsOperand,
        displayValue,
        operator,
        waitingSecodOperand
    } = calculator;

    const inputValue = parseFloat(displayValue);

    if (operator && waitingSecodOperand) {
        calculator.operator = nextOperator;
    }

    if (firsOperand === null) { // 2 + 
        calculator.firsOperand = inputValue;
    } else if (operator) { //2 + 4 =
        let result = 0;
        const currentValue = firsOperand || 0;
        if (operator === '/' && inputValue === '0') {
            result = 'Деление на 0';
        } else {
            result = allCalculation[operator](currentValue, inputValue); // 2 + 4 = 6
        }

        calculator.displayValue = result;
        calculator.firsOperand = result;
    }

    if (nextOperator === '+/-') {
        let result = 0;
        result = allCalculation[nextOperator](0, inputValue);
        calculator.displayValue = result;
        calculator.firsOperand = result;
        updateDisplay();
    } else {
        calculator.waitingSecodOperand = true; // 2 + || 2 + 4 =
        calculator.operator = nextOperator;// 2 + || 2 +4 =
    }
}

const inputOperand = (operand) => {
    const {
        displayValue,
        waitingSecodOperand
    } = calculator;

    if (waitingSecodOperand) {
        calculator.displayValue = operand;
        calculator.waitingSecodOperand = false;
    } else {
        calculator.displayValue = displayValue === '0' ? operand : displayValue + operand
    }
}

const updateDisplay = () => {
    const display = document.querySelector('.input').children[0];
    display.value = calculator.displayValue;
}

const clear = () => {
    calculator.displayValue = '0';
    calculator.waitingSecodOperand = false;
    calculator.firsOperand = null;
    calculator.operator = null
}

const addDot = (value) => {
    const {displayValue} = calculator;
    let firs = displayValue.indexOf(value);

    if (firs === -1) calculator.displayValue += value;
    return;
}

let keys = document.querySelector('.buttos');
keys.addEventListener('click', e => {
    const { target } = e;

    if (!target.matches('button')) return;

    if (target.classList.contains('operation')) {
        if (target.dataset.value !== 'C') {
            handleOperator(target.dataset.value);
            updateDisplay();
            return;
        } else {
            clear();
            updateDisplay();
            return;
        }
    }

    if (target.classList.contains('dot')){
        addDot(target.dataset.value);
        updateDisplay();
        return;
    }

    inputOperand(target.dataset.value);
    updateDisplay();
});

updateDisplay();


//----------------------

let elem = document.body;

let button = elem.children[1].children[1].children[0].children[0].lastElementChild

console.log(button.tagName)

elem.prepend(button);


elem.addEventListener('keydown', e => {
    // console.log('X документа:' + e.pageX);
    // console.log('Y документа:' + e.pageY);
    // console.log('X окна:' + e.clientX);
    // console.log('Y окна:' + e.clientY);
    console.log(e.code);
    console.log(e.key);
    console.log(e.keyCode);

})
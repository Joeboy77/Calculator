let currentExpression = '';
let display = document.getElementById('display');

function appendNumber(number){
    currentExpression += number;
    display.value = currentExpression;
}

function appendOperator(operator){
    currentExpression += operator;
    display.value = currentExpression;
}

function calculate(){
    try{
        const result = eval(currentExpression);
        display.value = result;
        currentExpression = result;
    }
    catch (error){
        display.value = 'Error';
    }
}

function clearDisplay() {
    currentExpression = '';
    display.value = '';
}




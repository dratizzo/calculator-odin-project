function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2)  {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

// function operate(num1, operation, num2) {
    
// }

let digitButtons = document.querySelectorAll(".numbers-clear div div p");

let firstValue = '0';

digitButtons.forEach(item) => {
    digit.addEventListener('click', () => {
        // vai concatenando o  valor
    });
}

// 1 + 3 - 5 * 8 + 1

// valor padrão é zero, primeiro click substitui

// clica num número
// provavelmente é uma string e você vai concatenando conforme vai clicando nos números

// clica numa operação, se clicar em outra alterna para ela

// começa a clicar em novos números volta a concatenar

// se clicar em uma outra operação resolve a anterior, 

// começa a usar o resultado da operação como o primeiro operando

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

function operate(actualValue, operatorSelection, newValue) {
    switch(operatorSelection) {
        case '+':
            return add();
            break;
        case '-':
            return subtract();
            break;
        case '*':
            return multiply();
            break;
        case '/':
            return divide();
            break;
    }

    // if (operatorSelection == '+') add();

};

// Seleciona dígitos numéricos
let digitButtons = document.querySelectorAll(".numbers-clear div div p");

// Seleciona valor do display
let currentValue = document.querySelector('.display-calculator p');

// Seleciona operadores
let operatorsDigitButtons = document.querySelectorAll('.operators div p')

// Variável que atualiza display
let actualValue = '';
let newValue = '';

let operatorSelection = '';

// Lê cliques nos botões dos dígitos
digitButtons.forEach((digit) => {
    digit.addEventListener('click', () => {
        // Se não houver operador atualiza o primeiro número
        if (operatorSelection == '') {
            actualValue += digit.textContent;
            currentValue.textContent = actualValue;
        } else { // Se houver atualiza o segundo número
            newValue += digit.textContent; 
            currentValue.textContent = newValue;
        };
    });
});

// ao fazer a operaçao tem que descelecionar o operador, mas sem operatorSelection == '')
// pois se não atualiza o valor atual e soma dígitos nele, então após essa primeira operação
// de alguma forma precisa começar a atualizar sempre o segundo

// talvez atualizar funções para retornar string 

// Lê cliques nos botões de operadores
operatorsDigitButtons.forEach((operator) => {
    operator.addEventListener('click', () => {
        if (newValue != '') {
            // aqui chama função para resolver a operação
            actualValue = operate(Number(actualValue), operatorSelection, Number(newValue));
            currentValue.textContent = actualValue;
            operatorSelection = operator.textContent;
        } else {
            operatorSelection = operator.textContent;
            console.log(operatorSelection);    
        }

    })
});

let equals = document.querySelector('.do-operation p');

equals.addEventListener('click', () => {
    // clique um um valor, faz nada
    // clique com um valor e operador, faz operação com ele mesmo
    // clique com dois valores e operador, faz operação normal
});


// seleciona operadores

// clique no operator botão indica seleção do tipo da operação

// clicar em novos números após clicar no operador começa segunda variável

// clicar em novo operador após ter clicado em números realiza a operação

// se houver um operador selecionado e você clicar em um digito coloca na segunda variável
// após a operação reseta, a menos que tenha sido clicado em um novo operador para realizar a operação
// resultado vai para o primeiro operando e já define o operador

// -------

// 1 + 3 - 5 * 8 + 1

// valor padrão é zero, primeiro click substitui

// clica num número
// provavelmente é uma string e você vai concatenando conforme vai clicando nos números

// clica numa operação, se clicar em outra alterna para ela

// começa a clicar em novos números volta a concatenar

// se clicar em uma outra operação resolve a anterior, 

// começa a usar o resultado da operação como o primeiro operando

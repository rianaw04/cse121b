/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */

const subtract = function(number1, number2) {
    return number1 - number2;
};

const subtractNumbers = function() {
    const subtractNumber1 = Number(document.querySelector('#subtract1').value);
    const subtractNumber2 = Number(document.querySelector('#subtract2').value);
    
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
};

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */

const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    const factor1 = Number(document.querySelector('#factor1').value);
    const factor2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiply(factor1, factor2);
};

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */

function divide(number1, number2) {
    return number1 / number2;
}

const divideNumbers = () => {
    const dividend = Number(document.querySelector('#dividend').value);
    const divisor = Number(document.querySelector('#divisor').value);
    
    document.querySelector('#quotient').value = divide(dividend, divisor);
};

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);


/* Decision Structure */

document.getElementById('getTotal').addEventListener('click', function() {
    // Declare and instantiate a variable that stores the numeric value entered by the user in the subtotal field
    const subtotal = parseFloat(document.getElementById('subtotal').value);
    
    // Check if the membership checkbox has been checked by the user to apply a 20% discount to the subtotal amount
    const isMember = document.getElementById('member').checked;
    const discount = isMember ? 0.2 : 0;
    
    // Calculate the total amount after applying the discount
    const total = subtotal * (1 - discount);
    
    // Output the total to the total span in the format shown with two decimals using a template string
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
});


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

document.getElementById('array').textContent = numbersArray.join(', ');

/* Output Odds Only Array */
const oddNumbers = numbersArray.filter(number => number % 2 !== 0);

document.getElementById('odds').textContent = oddNumbers.join(', ');

/* Output Evens Only Array */
const evenNumbers = numbersArray.filter(number => number % 2 === 0);

document.getElementById('evens').textContent = evenNumbers.join(', ');

/* Output Sum of Org. Array */

const sumOfArray = numbersArray.reduce((sum, number) => sum + number, 0);

document.getElementById('sumOfArray').textContent = sumOfArray;

/* Output Multiplied by 2 Array */
const multiplied = numbersArray.map(number => number * 2);

document.getElementById('multiplied').textContent = multiplied.join(', ');

/* Output Sum of Multiplied by 2 Array */

const sumOfMultiplied = multiplied.reduce((sum, number) => sum + number, 0);


document.getElementById('sumOfMultiplied').textContent = sumOfMultiplied;

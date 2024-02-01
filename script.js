document.addEventListener('DOMContentLoaded', function () {
// Container creation
const container = document.createElement('div');
document.body.appendChild(container);

// Disable right-click, copy, paste, Ctrl+C, Ctrl+V, and Escape
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

document.addEventListener('copy', function (e) {
    e.preventDefault();
});

document.addEventListener('cut', function (e) {
    e.preventDefault();
});

document.addEventListener('paste', function (e) {
    e.preventDefault();
});

document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && (e.key === 'c' || e.key === 'C' || e.key === 'v' || e.key === 'V')) {
        e.preventDefault();
    }

    if (e.key === 'Escape') {
        e.preventDefault();
    }
});

// SECTION: HEADER
const header = document.createElement('h1');
header.innerHTML = '1,000 <strong>JavaScript Most Popular Job Interview Challenge Game To Annex Your Coding Super-Power <span style="color: red;">(Beta)</span></strong>';
header.style.color = 'blue';
header.style.fontSize = '24px'; // Add font size for the entire header
container.appendChild(header);

// SECTION: COUNTDOWN TIMER
const countdown = document.createElement('div');
countdown.style.color = 'red';
countdown.style.fontSize = '30px'; // Add font size
countdown.innerText = `Time: 420sec`; // Initial time
container.appendChild(countdown);

// Set body background color
document.body.style.backgroundColor = '#ffcd08';

// SECTION: CHALLENGE DESCRIPTION
const paragraph = document.createElement('p');
paragraph.textContent = 'JavaScript Most Popular Job Interview Challenge:<br>Write a program that prints the numbers from 1 to 100.<br>But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”.<br>For numbers which are multiples of both three and five print “FizzBuzz”\n';
container.appendChild(paragraph);
const challengeText = '<strong>JavaScript Most Popular Job Interview Challenge Game:</strong><br>Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”.For numbers which are multiples of both three and five print “FizzBuzz”.';
paragraph.innerHTML = challengeText.split('.').join('.<br>');

// SECTION: USER INPUT AND CODE EVALUATION
const textarea = document.createElement('textarea');
textarea.style.width = '100%';
textarea.rows = 10; // Set the number of rows
textarea.cols = 50; // Set the number of columns
textarea.placeholder = 'Write your code here...\nUse For Loop to maximize the limited time...'; // Set placeholder
container.appendChild(textarea);

const evaluateButton = document.createElement('button');
evaluateButton.style.width = '100%';
evaluateButton.style.color = 'white';
evaluateButton.style.backgroundColor = 'BLUE';
evaluateButton.innerText = 'Evaluate Code';
evaluateButton.addEventListener('click', evaluateCode);
container.appendChild(evaluateButton);

// SECTION: COUNTDOWN TIMER INITIALIZATION
let time = 420;
setInterval(() => {
    countdown.innerText = `Time: ${time}sec`;
    if (time === 0) {
        logoutUser();
    }
    time--;
}, 1000);

// SECTION: FUNCTION TO LOGOUT USER WHEN TIME IS 0
function logoutUser() {
    console.log('User logged out');
}

// SECTION: EVALUATE CODE FUNCTION USING SANDBOXED ENVIRONMENT
function evaluateCode() {
    const userCode = textarea.value;

    try {
        const sandbox = new Function(userCode); // Use a sandboxed environment for code execution
        sandbox();
        alert('Congratulation! Code executed successfully, and with your newly discovered coding Super-Power, you are on your way to getting hired!');
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
}

// SECTION: FIZZBUZZ CHALLENGE IMPLEMENTATION
function fizzBuzz(n) {
    const result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) result.push('FizzBuzz');
        else if (i % 3 === 0) result.push('Fizz');
        else if (i % 5 === 0) result.push('Buzz');
        else result.push(i);
    }
    return result;
}
/*
// SECTION: EXAMPLE OF USING FIZZBUZZ FUNCTION
const fizzBuzzResult = fizzBuzz(100);
console.log(fizzBuzzResult);
*/
// SECTION: MATHEMATICAL CONCEPTS
// Modulo operation (%): Determine divisibility by checking the remainder.
// Logical conditions (if-else): Control flow based on divisibility.
// Looping (for loop): Iterate through numbers for FizzBuzz.
// Arrays: Store and compare multiple results.
// Strict mode ('use strict'): Enforce better coding practices.

// SECTION: ALERT THE USER WITH AUTHOR INFORMATION
alert(`1,000 JavaScript Most Popular Job Interview Challenge Game:\nCode author:\nDr. Melchisedec Bankole.\nClick OK to continue to the code challenge.`);

alert(`JavaScript Most Popular Job Interview Challenge:\n\nThis is the time to annex your coding Super-Power.\nThis might be your long-awaited opportunity to land your first dream job in tech.\nAre you ready? Lets go!\n Click Ok to continue to the challenge.`);


// SECTION: MEDIA QUERY FOR MOBILE PHONES
const mediaQuery = window.matchMedia('(max-width: 600px)'); // Adjust the width as needed

function handleMediaQueryChange(e) {
    if (e.matches) {
        // Apply mobile styles here
        header.style.fontSize = '20px';
        countdown.style.fontSize = '24px';
        paragraph.style.fontSize = '16px';
        textarea.style.fontSize = '16px';
        evaluateButton.style.fontSize = '16px';
    } else {
        // Reset styles for larger screens
        header.style.fontSize = '24px';
        countdown.style.fontSize = '20px';
        paragraph.style.fontSize = '16px';
        textarea.style.fontSize = '16px';
        evaluateButton.style.fontSize = '16px';
    }
}

// Attach the event listener to the media query
mediaQuery.addEventListener('change', handleMediaQueryChange);

// Initial check for the media query
handleMediaQueryChange(mediaQuery);
});

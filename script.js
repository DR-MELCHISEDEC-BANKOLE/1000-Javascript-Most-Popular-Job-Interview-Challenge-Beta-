document.addEventListener('DOMContentLoaded', function () {
// Container creation
const container = document.createElement('div');
document.body.appendChild(container);


// Disable right-click, copy, cut, paste, Ctrl+C, Ctrl+V, and Escape
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
header.innerHTML = '1,000 <strong>JavaScript Most Popular Job Interview Challenge Game To Annex Your Coding Super-Power <span style="color: red;">(Beta)<br></span></strong><span style="text-align: left; font-size: 18px; color: black;">Dr Melchisedec Bankole</span>';
header.style.color = 'blue';
header.style.fontSize = '24px'; // Add font size for the entire header
container.appendChild(header);

// Set body background color
document.body.style.backgroundColor = '#ffcd08';

// SECTION: CHALLENGE DESCRIPTION
const paragraph = document.createElement('p');
paragraph.textContent = 'JavaScript Most Popular Job Interview Challenge:<br>Write a program that prints the numbers from 1 to 100.<br>But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”.<br>For numbers which are multiples of both three and five print “FizzBuzz”\n';
container.appendChild(paragraph);
const challengeText = '<strong>JavaScript Most Popular Job Interview Challenge Game:</strong><br>Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”.For numbers which are multiples of both three and five print “FizzBuzz”.';
paragraph.innerHTML = challengeText.split('.').join('.<br>');

// SECTION: COUNTDOWN TIMER
const countdown = document.createElement('div');
countdown.style.color = 'red';
countdown.style.fontSize = '30px'; // Add font size
countdown.innerText = `Time: 420sec`; // Initial time
container.appendChild(countdown);
    
// SECTION: USER INPUT/TEXTAREA AND CODE EVALUATION
const textarea = document.createElement('textarea');
textarea.style.width = '100%';
textarea.rows = 10; // Set the number of rows
textarea.cols = 50; // Set the number of columns
textarea.placeholder = 'Write your code here...\nUse For Loop to maximize the limited time...\n\nEnjoy the music while you code...'; // Set placeholder
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
let intervalId;

function clearUserCode() {
    textarea.value = ''; // Clear the textarea
    alert('Time is up, please try again. Click OK to continue.');
    restartTimer();
}

function restartTimer() {
    time = 420; // Reset the time
    intervalId = setInterval(() => {
        updateTimer();
        if (time === 0) {
            clearInterval(intervalId); // Stop the timer
            clearUserCode();
        }
        time--;
    }, 1000);
}

function updateTimer() {
    countdown.innerText = `Time: ${time} sec`;
}

updateTimer(); // Initial call to display the timer
restartTimer(); // Initial call to start the timer


// SECTION: EVALUATE CODE FUNCTION USING SANDBOXED ENVIRONMENT
function evaluateCode() {
    const userCode = textarea.value.trim(); // Trim whitespace

    // Check if there is user input
    if (!userCode) {
        alert('Please provide code before evaluating.'); // Notify the user to input code
        return;
    }

    try {
        // Create a sandboxed environment with the fizzBuzz function
        const sandbox = new Function(`
            ${fizzBuzz}
            let userOutput;
            try {
                // Create a new fizzBuzz function in the user's context
                const fizzBuzzInUserContext = ${fizzBuzz};
                userOutput = fizzBuzzInUserContext(100).join(',');
                ${userCode}
            } catch (error) {
                throw new Error('User code error: ' + error.message);
            }
            return userOutput;
        `);

        const userOutput = sandbox();

        // Compare the user's output with the expected result (FizzBuzz)
        const fizzBuzzResult = fizzBuzz(100);
        const expectedOutput = fizzBuzzResult.join(',');

        if (userOutput === expectedOutput) {
            alert('Congratulation! Code executed successfully, and with your newly discovered coding Super-Power, you are on your way to getting hired!');        } else {
            alert('Sorry, your code did not produce the expected output for the FizzBuzz challenge. Please try again.');
        }
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
    
  // SECTION: AUDIO PLAYER
const audioElement = new Audio();
audioElement.id = "background-music";

const sources = [
    "https://www.dropbox.com/scl/fi/434lha3g0b4xnem7apoxn/2022-07-13_-_Our_Hopes_And_Dreams_-_www.FesliyanStudios.com.mp3?rlkey=dx6zh0o8ne0fg9xec1vaso5q8&raw=1",
    "https://www.dropbox.com/scl/fi/6iovlx9h4kurx0wedtafk/2020-08-11_-_Rise_Up_-_www.FesliyanStudios.com_Steve_Oxen-1.mp3?rlkey=24l8s91sjjqg03ez7bc43kuzo&raw=1"
];

let currentIndex = 0;
audioElement.src = sources[currentIndex];
audioElement.autoplay = true; // Autoplay the audio
audioElement.muted = false; // Not muted (set to false)

const audioToggle = document.createElement("button");
audioToggle.id = "toggle-audio";
audioToggle.textContent = "Toggle Audio Music";

// Adjust styles for the button
audioToggle.style.width = '100%';
audioToggle.style.color = 'white';
audioToggle.style.backgroundColor = 'red'; // Set background color to red

document.body.appendChild(audioElement);
document.body.appendChild(audioToggle);

audioToggle.addEventListener("click", function () {
    if (audioElement.paused) {
        audioElement.play();
    } else {
        audioElement.pause();
    }
});

audioElement.addEventListener("ended", function () {
    currentIndex = (currentIndex + 1) % sources.length;
    audioElement.src = sources[currentIndex];
    audioElement.play();
});

// SECTION: MEDIA QUERY FOR AUDIO PLAYER
const audioPlayerMediaQuery = window.matchMedia('(max-width: 600px)'); // Adjust the width as needed

function handleAudioPlayerMediaQueryChange(e) {
    if (e.matches) {
        // Apply styles or behavior for small screens (e.g., hide audio player)
        audioElement.style.display = 'none';
    } else {
        // Reset styles or behavior for larger screens
        audioElement.style.display = 'block';
    }
}

// Attach the event listener to the audio player media query
audioPlayerMediaQuery.addEventListener('change', handleAudioPlayerMediaQueryChange);

// Initial check for the audio player media query
handleAudioPlayerMediaQueryChange(audioPlayerMediaQuery);

    
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

const userName = prompt('Enter your name')

const greetings = 'Hello ' + userName;
alert(greetings);

const userAge = parseInt(prompt('Enter your age'));
const nextAge = userAge + 1;
alert('Next year you will be ' + nextAge);


// Ask Month Number 
// Divide it by 2 - /, -, *, % 
// Print to user
const userMonthOfBirth = parseInt(prompt('Enter your month of birth'));
const devidedMonth = userMonthOfBirth  / 2;
alert('Your month of birth devided by 2 is ' + devidedMonth);


// If construction 
const userAge = parseInt(prompt('Enter your age'));
if (userAge > 18) {
    // If true
    alert('You are adult');
} else {
    // If false
    alert('You are small');
}


function addOne(num) {
    const newNum = num + 1;
    return newNum;
}

let result = addOne(10);
alert(result);
result = addOne(result);
alert(result);


// // Korin kvadratniy z chisla 
result = Math.sqrt(16);
alert(result)
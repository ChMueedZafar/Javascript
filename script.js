// //  Question no 1

// // write a js program to find maximum number between two numbers

// let p1 = prompt("entre the first price ")
// let p2 = prompt("entre the second price ")

// if (p1>p2){
//     console.log("${p1} is greater then ${p2}");
    
// }
// else if(p1<p2){
//     console.log("${p2}>${p1}");
// }

// // Question no 2
// // write a program to find maximum between three numbers

// let price1 = prompt("entre the first number ")
// let price2 = prompt("entre the second number")
// let price3 = prompt("entre the thid number")

// if (p1 > p2 && p3){
//     console.log("p1 > p2 && p3");
// }
// else if (p1 > p3){
//     console.log("p1 > p3");
// }
// // Question no 3

// // write a js program to check wheather a number is negative or postive or zero

// function checkNumber(number) {
//     if (number > 0) {
//         return "Positive";
//     } else if (number < 0) {
//         return "Negative";
//     } else {
//         return "Zero";
//     }
// } 

// // Example usage:
// const num1 = 10;
// const num2 = -5;
// const num3 = 0;

// console.log(num1 + " is " + checkNumber(num1));
// console.log(num2 + " is " + checkNumber(num2));
// console.log(num3 + " is " + checkNumber(num3));

// // Question No 4
// // Write a js program to check whether a number is divisible by 5 and 11 or not .

// function isdivisibleby5and11(number) {
//     if (number % 5 === 0 && number % 11 === 0){
//         return true;
//     }else{
//         return false;
//     }
// }

// let numb1 = 55;
// let numb2 = 25;
// let numb3 = 30;


// console.log(number1 + "is divsible by 5 and 11:" + isdivisibleby5and11(number1));
// console.log(number2 + "is divsible by 5 and 11:" + isdivisibleby5and11(number2));
// console.log(number3 + "is divsible by 5 and 11:" + isdivisibleby5and11(number3));

// // Question no 5
// // Write a js program to check whether a number is even or odd.

// function isEvenOrOdd(number) {
//     if (number % 2 === 0) {
//         return "Even";
//     } else {
//         return "Odd";
//     }
// }

// // Test the function with some examples
// const number1 = 10;
// const number2 = 7;
// const number3 = 0;

// console.log(number1 + " is " + isEvenOrOdd(number1));
// console.log(number2 + " is " + isEvenOrOdd(number2));
// console.log(number3 + " is " + isEvenOrOdd(number3));

// Question no 6
// Write a js program to check whether a year is leap year or not

// function isLeapyear(leapyear){
//     if ((year % 4 === 0 && year % 100!==0)||(year % 400 === 0)){
//         return true ;
//     }
// }

// let year = 2024;
// if (isLeapyear (year)){
//     console.log(year + "is a laeap year");
// }else {
//     console.log(year + "is not a leap year")
// }


// Queation no 7
// Write a js program to input any alphabet and check whether it is vowel or consonant.

// Function to check if a character is a vowel or consonant
// function checkVowelOrConsonant(character) {
//     // Convert the character to lowercase to handle both cases
//     character = character.toLowerCase();

//     // Check if the character is a vowel
//     if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u') {
//         return character + " is a vowel.";
//     } 
//     // Check if the character is a consonant
//     else if (/[a-z]/.test(character)) {
//         return character + " is a consonant.";
//     } 
//     // If the character is not a letter
//     else {
//         return "Please enter a valid alphabet.";
//     }
// }

// // Test the function
// let input = prompt("Enter an alphabet:");
// let result = checkVowelOrConsonant(input);

// console.log(result);
// question no 8
// Write a js program to check whether a character is uppercase or lowercase alphabet.

// Function to check if a character is uppercase or lowercase alphabet
function checkUpperCaseOrLowerCase(character) {
    // Check if the character is an uppercase alphabet
    if (character >= 'A' && character <= 'Z') {
        return character + " is an uppercase alphabet.";
    } 
    // Check if the character is a lowercase alphabet
    else if (character >= 'a' && character <= 'z') {
        return character + " is a lowercase alphabet.";
    } 
    // If the character is not an alphabet
    else {
        return character + " is not an alphabet.";
    }
}

// Test the function
let input = prompt("Enter a character:");
let result = checkUpperCaseOrLowerCase(input);

console.log(result);

// Question no 9
// Write a js program to input the week number and print weekday.

function getWeekday(weekNumber) {
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const index = (weekNumber - 1) % 7; // Weekdays repeat every 7 days
    return weekdays[index];
}

const weekNumber = parseInt(prompt("Enter the week number:"));
const weekday = getWeekday(weekNumber);
console.log("Weekday:", weekday);

// Question no 10
// Write a js program to input the month number and print the number of days in that month

function getDaysInMonth(monthNumber) {
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return daysInMonth[monthNumber - 1];
}

const monthNumber = parseInt(prompt("Enter the month number (1-12):"));
if (monthNumber >= 1 && monthNumber <= 12) {
    const days = getDaysInMonth(monthNumber);
    console.log(`Number of days in month ${monthNumber}: ${days}`);
} else {
    console.log("Invalid month number. Please enter a number between 1 and 12.");
}

// Questioon no 11
// Write a js program to count a minimum number of notes in a given amount.

function countNotes(amount) {
    const denominations = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
    let notesCount = {};

    for (let denomination of denominations) {
        if (amount >= denomination) {
            const count = Math.floor(amount / denomination);
            notesCount[denomination] = count;
            amount -= count * denomination;
        }
    }

    return notesCount;
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter the amount: ', amount => {
    const parsedAmount = parseInt(amount);

    if (!isNaN(parsedAmount) && parsedAmount > 0) {
        const notes = countNotes(parsedAmount);
        console.log("Minimum number of notes:");
        for (let denomination in notes) {
            console.log(`${notes[denomination]} notes of Rs. ${denomination}`);
        }
    } else {
        console.log("Invalid amount. Please enter a positive integer.");
    }

    readline.close();
});

// Quetion no 12
// Write a js program to input marks of five subjects Physics, Chemistry,
// Biology, Mathematics, and Computer. Calculate percentage and grade
// according to the following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F

// Function to calculate percentage
function calculatePercentage(physics, chemistry, biology, mathematics, computer) {
    let totalMarks = physics + chemistry + biology + mathematics + computer;
    let percentage = (totalMarks / 500) * 100;
    return percentage;
}

// Function to determine grade
function calculateGrade(percentage) {
    let grade;
    if (percentage >= 90) {
        grade = 'Grade A';
    } else if (percentage >= 80) {
        grade = 'Grade B';
    } else if (percentage >= 70) {
        grade = 'Grade C';
    } else if (percentage >= 60) {
        grade = 'Grade D';
    } else if (percentage >= 40) {
        grade = 'Grade E';
    } else {
        grade = 'Grade F';
    }
    return grade;
}

// Input marks for each subject
let physics = parseInt(prompt("Enter marks for Physics:"));
let chemistry = parseInt(prompt("Enter marks for Chemistry:"));
let biology = parseInt(prompt("Enter marks for Biology:"));
let mathematics = parseInt(prompt("Enter marks for Mathematics:"));
let computer = parseInt(prompt("Enter marks for Computer:"));

// Calculate percentage
let percentage = calculatePercentage(physics, chemistry, biology, mathematics, computer);

// Determine grade
let grade = calculateGrade(percentage);

// Output the result
console.log("Percentage: " + percentage.toFixed(2) + "%");
console.log("Grade: " + grade);

// Question no 13
// Write a js program to input the basic salary of an employee and calculate
// its Gross salary according to the following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%

function calculateGrossSalary(basicSalary) {
    let hra, da;

    if (basicSalary <= 10000) {
        hra = 0.2 * basicSalary;
        da = 0.8 * basicSalary;
    } else if (basicSalary <= 20000) {
        hra = 0.25 * basicSalary;
        da = 0.9 * basicSalary;
    } else {
        hra = 0.3 * basicSalary;
        da = 0.95 * basicSalary;
    }

    const grossSalary = basicSalary + hra + da;
    return grossSalary;
}

const basicSalary = parseInt(prompt("Enter the basic salary:"));

if (!isNaN(basicSalary) && basicSalary >= 0) {
    const grossSalary = calculateGrossSalary(basicSalary);
    console.log("Gross Salary:", grossSalary);
} else {
    console.log("Invalid basic salary. Please enter a non-negative number.");
}

// Question no 14
// Write a js program to input electricity unit charges and calculate total
// electricity bill according to the given condition:
// For the first 50 units Rs. 0.50/unit
// For the next 100 units Rs. 0.75/unit
// For the next 100 units Rs. 1.20/unit
// For units above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill

function calculateElectricityBill(units) {
    let bill = 0;

    if (units <= 50) {
        bill = units * 0.50;
    } else if (units <= 150) {
        bill = (50 * 0.50) + ((units - 50) * 0.75);
    } else if (units <= 250) {
        bill = (50 * 0.50) + (100 * 0.75) + ((units - 150) * 1.20);
    } else {
        bill = (50 * 0.50) + (100 * 0.75) + (100 * 1.20) + ((units - 250) * 1.50);
    }

    // Add 20% surcharge
    bill *= 1.20;

    return bill;
}

const units = parseFloat(prompt("Enter the electricity units consumed:"));

if (!isNaN(units) && units >= 0) {
    const totalBill = calculateElectricityBill(units);
    console.log("Total electricity bill: Rs.", totalBill.toFixed(2));
} else {
    console.log("Invalid input. Please enter a non-negative number of units.");
}





































































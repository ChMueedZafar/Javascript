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










































































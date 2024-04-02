// // Question no 1
// let p1 = prompt("Entre the First number")
// let p2 = prompt("Entre the Second number")

// if (p1>p2){
//     console.log("${p1} is greater then ${p2}");
// }
// else if (p1<p2){
//     console.log('$ {p1}isgreater then ${p2}');
// }
// else{
//     alert('${p1}is equal to ${p2}');
// }
// // Question 2
// let price1 = prompt("entre the first number")
// let price2 =prompt("entre the second number")
// let price3 =prompt("entre the third number")

// if (price1>price2&&price3){
//     console.log("${p1}is greater then {p2}&&{p3}");
// }
// JavaScript program to find the maximum between two numbers

// Function to find the maximum between two numbers
function findMax(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}
// JavaScript program to find the maximum between three numbers

// Function to find the maximum between three numbers
function findMax(num1, num2, num3) {
    let max = num1;

    if (num2 > max) {
        max = num2;
    }

    if (num3 > max) {
        max = num3;
    }

    return max;
}

// Example usage:
const number1 = 5;
const number2 = 10;
const number3 = 8;
const maxNumber = findMax(number1, number2, number3);
console.log("The maximum number between", number1 + ",", number2 + ", and", number3, "is:", maxNumber);


// JavaScript program to check whether a number is negative, positive, or zero

// Function to determine the sign of a number
function checkSign(number) {
    if (number > 0) {
        return "Positive";
    } else if (number < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

// Example usage:
const num = 10;
const sign = checkSign(num);
console.log("The number", num, "is:", sign);

// JavaScript program to check whether a number is divisible by 5 and 11 or not

// Function to check divisibility by 5 and 11
function checkDivisibility(number) {
    if (number % 5 === 0 && number % 11 === 0) {
        return "Divisible by both 5 and 11";
    } else {
        return "Not divisible by both 5 and 11";
    }
}

// Example usage:
const num1 = 55;
const result = checkDivisibility(num);
console.log("The number", num, "is:", result);

// JavaScript program to check whether a number is even or odd

// Function to check if a number is even or odd
function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// Example usage:
const num2 = 7;
const result2 = checkEvenOrOdd(num);
console.log("The number", num, "is:", result);

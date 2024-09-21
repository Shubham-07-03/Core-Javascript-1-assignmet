/*
Q1. Write a program that grades students based on their marks6
& If greater than 90 then A Gradp
& If between 70 and 90 then a B gradp
& If between 50 and 70 then a C gradp
& Below 50 then an F grade                            
*/

// function gradeStudent(marks) {
//     if (marks > 90) {
//         return 'A Grade';
//     } else if (marks >= 70 && marks <= 90) {
//         return 'B Grade';
//     } else if (marks >= 50 && marks < 70) {
//         return 'C Grade';
//     } else {
//         return 'F Grade';
//     }
// }
// const studentMarks = 85; 
// const grade = gradeStudent(studentMarks);
// console.log(`The student's grade is: ${grade}`);





/*
Q2. Generate numbers between any 2 given numbers.
Ex.
Const num1 = 10;
Const num2 = 25;
Output: 11,12,13,......, 25
*/

// let num1 = 10;
// let num2 = 25;

// function generateNumbers(start, end) {
//     let numbers = [];
//     for (let i = start + 1; i < end; i++) {
//         numbers.push(i);
//     }
//     return numbers;
// }

// const output = generateNumbers(num1, num2);
// console.log(output.join(', ')); 





/*
Q3. Use a nested ternary operator to check that a number is positive, negative or zero. You have to print
“positive” if the number is positive and similarly for negative and zero also.
*/
// const number = 5; // positive
// const result = number > 0 ? "positive" : (number < 0 ? "negative" : "zero");
// console.log(result);





// Q4. Describe the usage of the comma operator in JavaScript and provide an example.

// The comma operator in JavaScript allows you to evaluate multiple expressions in a single statement,
// returning the value of the last expression. It can be useful in situations 
// where you want to execute several operations in a concise manner.

/*  Usage
    Multiple Expressions: You can use the comma operator to execute multiple expressions where only one expression is expected.
    For Loop Initialization: It is commonly used in for loops to declare multiple variables.
*/
// Example
// let a = 1, b = 2;
// let result = (a += 1, b += 2, a + b); 

// console.log(result); // Output: 6 
// console.log(a, b); // Output: 2 4

/*   In this example, a is incremented by 1, b is incremented by 2, and
     the result is the sum of the updated values of a and b. 
     The value returned by the entire expression is 6, which is the result of a + b. 
*/








/* Q.5  You're creating a basic login system. Make a login function with two things:
        a username and a password. Check if the username is "admin" and the password is "12345".
        If they're both correct, show "Login successful"; if not, show "Invalid credentials."
*/

// function login(username, password) {
//     const correctUsername = "admin";
//     const correctPassword = "12345";

//     if (username === correctUsername && password === correctPassword) {
//         console.log("Login successful");
//     } else {
//         console.log("Invalid credentials");
//     }
// }

// login("admin", "12345"); // Output: Login successful
// login("user", "password"); // Output: Invalid credentials






/*
Q6. You are working on an e-commerce platform. Write a JavaScript program that takes the payment
method ("credit", "debit", or "paypal") as input and uses a switch statement to determine and print the
processing fee associated with each payment method. For example, "credit" may have a processing fee of
2%, "debit" 1.5%, and "paypal" 3%.
*/
// function getProcessingFee(paymentMethod) {
//     let fee;

//     switch (paymentMethod.toLowerCase()) {
//         case "credit":
//             fee = "2%";
//             break;
//         case "debit":
//             fee = "1.5%";
//             break;
//         case "paypal":
//             fee = "3%";
//             break;
//         default:
//             fee = "Invalid payment method";
//     }

//     return fee;
// }

// const paymentMethod = "credit"; // Change this to "debit" or "paypal" to test other methods
// const processingFee = getProcessingFee(paymentMethod);
// console.log(`The processing fee for ${paymentMethod} is ${processingFee}.`);





/*
Q7. You are building a weather application. Write a JavaScript program that takes the current temperature
as input and uses the conditional (ternary) operator to determine and print the weather condition. If the
temperature is above 30°C, the condition is "Hot"; otherwise, it is "Moderate".
*/
// function determineWeatherCondition(temperature) {
//     const weatherCondition = temperature > 30 ? "Hot" : "Moderate";
//     return weatherCondition;
// }
// const currentTemperature = 32; // Change this value to test different temperatures
// const weatherCondition = determineWeatherCondition(currentTemperature);
// console.log(`The current weather condition is: ${weatherCondition}.`);




/*
Q8.You are creating a program to calculate the sum of numbers. Write a JavaScript program that takes a
positive integer as input and uses a do-while loop to calculate and print the sum of all numbers from 1 to the
given integer.
*/
// function calculateSum(n) {
//     let sum = 0;
//     let i = 1;

//     // Using a do-while loop to calculate the sum
//     do {
//         sum += i;
//         i++;
//     } while (i <= n);

//     return sum;
// }

// // Example usage
// const positiveInteger = 5; // Change this value to test with different integers
// const totalSum = calculateSum(positiveInteger);
// console.log(`The sum of numbers from 1 to ${positiveInteger} is: ${totalSum}.`);


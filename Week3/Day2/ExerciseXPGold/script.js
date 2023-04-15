//Exercise 1 : Favorite Color

let sentence = ["my","favorite","color","is","blue"];
let newSentence = sentence.join(' ');
console.log(newSentence); // my favorite color is blue

//Exercise 2 : Mixup

let firstWord = "Hello";
let secondWord = "World";
let newWord = secondWord.slice(0, 2) + firstWord.slice(2) + " " + firstWord.slice(0, 2) + secondWord.slice(2)


//Exercise 3 : Calculator
 
const num1 = Number(prompt("Please type first number: "));
// const re = RegExp([-+*/]?)
const num2 = Number(prompt("Please type second number: "));

const sum = alert('The sum of your numbers is: ' + num1 + num2);

Ask the user for a string of numbers separated by commas
Console.log the sum of the numbers.
Hint: use some string methods
Examples
"2,3"➞ 5

const num1 = Number(prompt("Please type numbers separated by commas: "));

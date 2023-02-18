/* Problem Number -1 
Even or odd

Question is : Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

// Solution Number -1 :

function evenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd"
}

/*Problem Number -2 
Multiply 

Question is : This code does not execute properly. Try to figure out why.-function multiply(a, b){
  a * b
}

*/ 

// Solution Number - 2:

function multiply(a, b){
  return a * b;
  
}

/* Problem Number - 3 
  Sum of Positive
  Question is : You get an array of numbers, return the sum of all of the positives ones.

                Example [1,-4,7,12] => 1 + 7 + 12 = 20

  Note: if there is nothing to sum, the sum is default to 0.
*/

// Solution Number - 3:

function positiveSum(arr) {
  return arr.reduce((acc, curr) => curr > 0 ? acc + curr : acc, 0);
}

/* Problem Number -4 

Return Negative

Question is: In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples :

makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12

Notes :

The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.


*/

// Solution Number - 4 :

function makeNegative(num) {
  // Code?
  if(num > 0){
    return num * (-1);
  }else{
    return num
  }
}


/* Problem Number -5 
Reversed Strings

Question is : Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'

*/

// Solutions Number - 5 :

function solution(str){
  return str.split('').reverse().join('');
}

/* Problem Number - 6 

Convert boolean values to strings 'Yes' or 'No'.

 Question is : Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

*/

// Solution Number - 6 :

function boolToWord( bool ){
  //...
  return bool ? "Yes" : "No";
}

/* Problem Number -7  
Opposite number

Question is : Very simple, given an integer or a floating-point number, find its opposite.

Examples:

1: -1
14: -14
-34: 34

*/

// Solution Number -7 :

function opposite(number) {
  //your code here
  let opposite = number * -1;
  return opposite;
}

/* Problem Number - 8 :
Convert a Number to a String!
Question is : We need a function that can transform a number (integer) into a string.
What ways of achieving this do you know?

Examples (input --> output):

123  --> "123"
999  --> "999"
-100 --> "-100"

*/

// Solution Number -8 :

function numberToString(num) {
  return num.toString();
}

/* Problem Number - 9 :
 Remove First and Last Character

 Question is : It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

 */

 // Solution Number -9 

 function removeChar(str){
 //You got this!
 return str.slice(1, -1);
};

/* Problem Number -10 
String repeat

Question is : Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)

6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"

*/

// Solution Number - 10 

function repeatStr (n, s) {
  return s.repeat(n);
}

/* Problem Number -11 
Square(n) Sum

Question is : Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example 
for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

*/

// Solution Number - 11 

function squareSum(numbers){
  let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
        sum += numbers[i] * numbers[i];
    }
    return sum;
}

/*Problem Number - 12
Grasshopper - Summation

Question is : Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example (Input -> Output):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

 */

// Solution Number - 12 

var summation = function (num) {
  // Code here
  return num * (num + 1) / 2;
}

/* Problem Number - 13 

Remove String Spaces

Question is : Simple, remove the spaces from the string, then return the resultant string.

*/

// Solution Number - 13

function noSpace(x){
  return x.replace(/\s/g, '');
}

/* Problem Number - 14 
 Find the smallest integer in the array
Question is :Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.

*/

//Solution Number - 14

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

/* Problem Number - 15 
Counting sheep...

Question is : Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]

*/

// Solution Number -15 

function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  return arrayOfSheep.filter(Boolean).length
}


/* Problem Number - 16
Century From Year

Question is : Introduction
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20

 */

// Solution Number - 16

function century(year) {
  // Finish this :)
  
  return Math.ceil(year / 100);
}

/* Problem Number -17 
Keep Hydrated!

Question is : Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5

*/

// Solution Number - 17

function litres(time) {
  return Math.floor(time * 0.5);
}

/* Problem Number - 18  
Basic Mathematical Operations

Question is : Your task is to create a function that does four basic mathematical operations.
The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output

('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7

*/

// Solution Number - 18

function basicOp(operation, value1, value2)
{
  // Code
  if (operation === '+') {
    return value1 + value2;
  } else if (operation === '-') {
    return value1 - value2;
  } else if (operation === '*') {
    return value1 * value2;
  } else if (operation === '/') {
    return value1 / value2;
  } else {
    return "Invalid operation";
  }
}

/*Problem number -19  
Abbreviate a Two Word Name

Question is : Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.

Examples : It should look like this:
Sam Harris => S.H
patrick feeney => P.F

*/

// Solution Number -19

function abbrevName(name){

    // code away
    var nameArray = name.split(" ");
    var firstInitial = nameArray[0].charAt(0).toUpperCase();
    var lastInitial = nameArray[1].charAt(0).toUpperCase();
    return firstInitial + "." + lastInitial;

}

/*Problem Number -20  
Is n divisible by x and y?

Question is : Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

Examples:
1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5

*/

// Solution Number - 20

function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0;
}

/*Problem Number - 21 
Convert a String to a Number!

Question is: We need a function that can transform a string into a number. What ways of achieving this do you know?
Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

Examples
"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7

*/

// Solution number-21

const stringToNumber = function(str){
  // put your code here
  return parseInt(str);
}

/* Problem Number -22 
Price of Mangoes

Question is : There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

Examples : mango(2, 3) ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
mango(3, 3) ==> 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
mango(5, 3) ==> 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
mango(9, 5) ==> 30   # 6 mangoes for $5 per unit = $30; +3 mangoes for free

*/

// Solution Number - 22

function mango(quantity, price){
   let totalCost = 0;
    let freeMangoes = Math.floor(quantity / 3);
    totalCost = (quantity - freeMangoes) * price;
    return totalCost;
}

/* Problem number-23 
Unfinished Loop - Bug Fixing #1

Question is: Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!
function createArray(number){
  var newArray = [];
  
  for(var counter = 1; counter <= number;){
    newArray.push(counter);
  }
  
  return newArray;
}

Solution Description:
The bug in the for loop is that the counter variable is not being incremented. To fix this, you can add "counter++" at the end of the for loop's body.This will increment the counter variable by 1 on each iteration of the loop, so that it eventually reaches the value of "number" and the loop will exit.

*/

//Solution number- 23

function createArray(number){
  var newArray = [];
  
  for(var counter = 1; counter <= number; counter++){
    newArray.push(counter);
  }
  
  return newArray;
}

/* Problem Number - 24
 Quarter of the year

 Question is : Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

 For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

Constraint:

1 <= month <= 12

*/

// Solution Number - 24

const quarterOf = (month) => {
  // Your code here
  return (month >= 1 && month <= 3) ? 1 :
         (month >= 4 && month <= 6) ? 2 :
         (month >= 7 && month <= 9) ? 3 :
         (month >= 10 && month <= 12) ? 4 : "Invalid month";
  
}

/* Problem Number - 25 
The 'if' function

Question is: Create a function called _if which takes 3 arguments: a value bool and 2 functions (which do not take any parameters): func1 and func2
When bool is truthy, func1 should be called, otherwise call the func2.

Example:
_if(true, function(){console.log("True")}, function(){console.log("false")})
Logs 'True' to the console.

*/

// Solution Number - 25

function _if(bool, func1, func2) {
  // ...
   if (bool) {
    func1();
  } else {
    func2();
  }
}

/*Problem Number -26 
Third Angle of a Triangle

Question is:  You are given two interior angles (in degrees) of a triangle.
Write a function to return the 3rd.

Note: only positive integers will be tested.

*/

// Solution Number - 26

function otherAngle(a, b) {
  return 180 - (a+b);
}

/* Problem Number - 27 
Simple multiplication

Question is : This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

*/

//Solution Number - 27

function simpleMultiplication(number) {
    // your code........
  return (number % 2 === 0) ? number * 8 : number * 9;
}

/* Problem Number - 28 
Reversed Words
Question is : Complete the solution so that it reverses all of the words within the string passed in.
Words are separated by exactly one space and there are no leading or trailing spaces.

Example(Input --> Output):
"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

This solution uses the JavaScript string method split() to split the input string into an array of words, using a space as the delimiter. The reverse() method is then used to reverse the order of the elements in the array. Finally, the join() method is used to join the reversed words back together into a single string, using a space as the separator.

*/

//Solution number - 28

function reverseWords(str){
  return str.split(" ").reverse().join(" "); // reverse those words
}

/* Problem Number - 29 
Crash Override

Question is : Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override are some notable examples from the film Hackers.
Your task is to create a function that, given a proper first and last name, will return the correct alias.
Notes:
Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given. See the examples below for further details.

If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."

Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.
Examples
// These two objects are preloaded, you need to use them in your code
var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache' ...}
var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst' ...}

aliasGen('Larry', 'Brentwood') === 'Logic Bomb'
aliasGen('123abc', 'Petrovic') === 'Your name must start with a letter from A - Z.'

How i am thinking about this:
This function takes in two parameters: first and last representing the first and last name. It first converts the first letter of both names to uppercase using the toUpperCase() method. It then checks if the objects firstName and surname have properties that match the first letter of the first and last names respectively. If either of these properties is not found, the function returns the string "Your name must start with a letter from A - Z.". If both properties are found, the function returns the concatenation of the values of these properties.

*/

// Solution Number - 29

function aliasGen(first, last){
    // Code Here
   first = first[0].toUpperCase();
   last = last[0].toUpperCase();
   if (!firstName[first] || !surname[last]) {
    return 'Your name must start with a letter from A - Z.';
  }
  return firstName[first] + ' ' + surname[last];
}


/* Problem  Number-30 
Convert number to reversed array of digits

Question is: Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]

*/

// Solution Number - 30

function digitize(n) {
  //code here
  return String(n)
    .split("")
    .reverse()
    .map(function(item) {
      return parseInt(item);
    });
}

/* Problem Number - 31 
Beginner - Lost Without a Map

Question is : Beginner - Lost Without a Map
Given an array of integers, return a new array with each value doubled.
For example:
[1, 2, 3] --> [2, 4, 6]

*/

// Solution Number - 31

function maps(x){
  return x.map(n => n * 2);
}

/* Problem Number -32 
A Needle in the Haystack

Question is : Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] -->

*/

// Solution Number - 32 

function findNeedle(haystack) {
  // your code here
  for (i = 0 ; i < haystack.length ; i++){
    if(haystack[i]==="needle"){
      return "found the needle at position " + i
    }
  }
}

/* Problem number - 33  
Returning Strings
Question is: Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

[Make sure you type the exact thing I wrote or the program may not execute properly]

*/

// Solution Number - 33

function greet(name){
  //your code here
  return (`Hello, ${name} how are you doing today?`);
}

/* Problem number - 34 

Function 1 - hello world

Question is: 
Description:
Make a simple function called greet that returns the most-famous "hello world!".

Style Points
Sure, this is about as easy as it gets. But how clever can you be to create the most creative hello world you can think of? What is a "hello world" solution you would want to show your friends?

*/

// Solution Number - 34

greet = hw => 'hello world!'





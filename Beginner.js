/*
JavaScript Practice Exercises For Beginners
===========================================

Beginner Exercises: Part 1
--------------------------
*/

/* 
Exercise 1:
-----------
Write a JavaScript program to check tow numbers and return true 
if one of the number is 100 or if the sum of the tow numbers is 100.
*/

/*
Solution:
const isEqualTotal = (a, b) => a === 100 || b === 100 || (a+b) === 100;
console.log(isEqualTotal(100,0))
console.log(isEqualTotal(0,100))
console.log(isEqualTotal(50,50))
*/

/*
Exercise 2
----------
Write a javaScript program to get the extension of a filename.
*/
/*
Solution:
const getFileExtension = (start) => start.slice(start.lastIndexOf('.'))
console.log(getFileExtension('index.module.css'))
*/

/*
Exercise 3
----------
Write a javaScript program to replace every character in a given 
string with the character following it in the alphabet.
*/

/*
Solution:
//String.fromCharCode
//charCodeAt
*/

/*
Exercise 4
----------
Write a javaScript program to get the current date.
Expected Output: 
mm-dd-yyyy, mm/dd/yy or dd-mm-yyyy, dd/mm/yyyy
*/
/*
//Solution:
const formatDate = (date = new Date()) => {
    const days = date.getDate(); // +1 
    const months = date.getMonth(); // +1
    const years = date.getFullYear();
    return `${days}/${months}/${years}`
}
console.log(formatDate())
*/

/*
Exercise 5
----------
Write a javaScript program to create a new string adding "New!"
in front of a given string. If the given string begins with "New!" 
Already then return the original string.
*/
/*
//Solution:
 const addNew = (str) => str.indexOf('New!') === 0 ? str: `New! ${str}`;
 console.log(addNew('New! Offers'));
*/

/*
Beginner Exercises: Part 2
--------------------------
Exercise 6
----------
Write a javaScript program to create a new string from a given string
takeing the first 3 characters and the last 3 characters of a string
and adding them together. The string length must be 3 or more, if not, 
the original string is returned.
*/


/*
Exercise 7
----------
Write a javaScript program to always return a random number between min 
and max (both incuded)
*/

/*
//Solution:
function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
console.log(getRandomNumber(1,6))
*/

/*
Exercise 8
----------
How to arrange the names in an array alphabetically ?
*/
/*
//Solution:
const students = ["Limon". "Emon", "Saad", "Ashik"];
console.log(students.sort());
*/

/*
Exercise 9
----------
//Numeric Sort
How to arrange number in an array from large to small or from small to large?
*/
/*
//Solution:
const rollNumber = [40, 20, 11, 5, 1, 7, 3, 9];
console.log(rollNumber.sort(function(a, b){
    return a - b; // large to small return b -a 
}));
*/

/*
Exercise 10
----------
How to find out whether a year Leap Year ?
*/
/*
//Solution:

*/

function isLeapYear (year){
    if((year % 400 ===0) || (year % 4 === 0) && (year % 100 !== 0)){
        console.log(`${year} is Leap Year`)
    } else{
        console.log(`${year} is not Leap Year`)
    }
}
isLeapYear(2024)


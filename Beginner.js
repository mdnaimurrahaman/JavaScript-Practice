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
const formatDate = (date = new Date()) => {
    const days = date.getDate(); // +1 
    const months = date.getMonth(); // +1
    const years = date.getFullYear();
    return `${days}/${months}/${years}`
}
console.log(formatDate())
*/




/* 
Write a Javascript program to replace every character
in a given string with the character following it in the
alphabet
*/
//Use Built in functions like
//1. String.fromCharCode
//2. CharCodeAt

//***Code Below ***

const StringShift = (str)=> str.split('')
.map(char =>String.fromCharCode(char.charCodeAt(0)+1))
.join('');

console.log(StringShift('ABC'));
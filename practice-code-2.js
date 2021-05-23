/*
Write a Javascript program to get the extension of a file name
*/

//Code below

let StringExtesnion = (str) => str.slice(str.lastIndexOf('.'));
let StringConv = (stri)=>stri.slice(stri.indexOf('.'));
console.log(StringExtesnion("index.js"));
console.log(StringExtesnion("index.node.js"));
console.log(StringConv("index.jpg"));
console.log(StringConv("index.node.js"));
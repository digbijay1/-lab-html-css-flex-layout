//Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more, if not, the original string is returned.
const str = 'ECMAScript 2015';
const n = 3;
const res=str.substring(str.length - n);
console.log(res)
const new_str="abc"
const new_str2=res+new_str+res
console.log(new_str2)

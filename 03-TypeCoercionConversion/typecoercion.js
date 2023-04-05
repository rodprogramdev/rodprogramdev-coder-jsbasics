/* REVIEW OF DATATYPES 
let a; 
a = 10;

console.log(typeof a);

let b;
b = 'Text of string literal';
console.log(typeof b);

let c;
c = false;

console.log(typeof c);

*/

// Type coercion > this is a process of converting value from one type to another

// Converting string to number
// Convert number to string
// Convert object to boolean
/*
let a = 10; 
console.log(typeof a); //first console.log a datatype of number
let b = '7'; 
console.log(typeof b); //second console.log a datatype of string 
b = Number(b);
let c = a + b; // (+) plus sign is also considered to be the string concatenation operator & it can also be used for addition
console.log(typeof c); // third console.log a datatype of string 

console.log('Answer: ' + c);
*/
// EXPLICIT TYPE CONVERSION examples are Number(), parseFloat(), parseInt() Methods that can be used to convert string to numbers.

// Type conversion is similar to Type coercion because we are converting values from one data type to another

// Difference of the term Type conversion vs Type coercion is that type coercion is implicit whereas type conversion can be implicit or explicit. NOTE: REFERENCE: https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion

/*
console.log(Number('5'));
console.log(typeof Number('5'));
*/
/*
let d = 5;
let e = '6';
e = parseInt(e, 10);
let f = d + e;
console.log('Answer: ' + f);
*/

function explicit() {
  let d = 5;
  let e = "6";
  e = parseInt(e, 10);
  let f = d + e;
  console.log("Explicit Answer: " + f);
  console.log(typeof f);
}



// IMPLICIT TYPE COERCION - converting values automatically

function implicit() {
  if (1 == "1") { 
    let a = 1; // number
    let b = "1"; // string
    let c = a + b; // string
    console.log("Implicit Answer: " + c); // what is the type of c right now?
    console.log(typeof c);
  }
}

explicit();
implicit();


// What if we pass in a string that will not be converted into a numeric value?

let d = parseInt('Rod', 10);
console.log(d); // This should produce a NaN - NOT A NUMBER - this is not an error its telling us that the value is NOT A NUMBER


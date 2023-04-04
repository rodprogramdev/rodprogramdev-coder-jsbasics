
/* WAYS OF DECLARING VARIABLES */

// The var keyword is used for writing JS code since 1995 to 2015
//var a; // If we use the var keyword we are expecting some ramifications in relation to scope

// The let and const keywords were added to JS in 2015
//let b; // Let keyword
//const PLAYER1 = 'character'; // const keyword. We can use single quotes to assign a string data type
//const PLAYER2 = "character"; // const keyword. WE can also use double quotes to assign a string data type


// y = 5; // undeclared variables

// var x; // Declaring a variable

/*INITIALIZING OR ASSIGNING A VALUE TO A VARIABLE > We are storing data inside of a variable */
// var x = 10; // Initializing a variable or assigning a value to a variable. 

// /* We can perform mathematical operations using variables*/
// var sum = y + x;

/* WE can check for yes or no or true or false using variables*/

// let d = false; // This is a boolean data type.

// const e = 8;
// //e = 10; This will run into an error


// let f = 1;
// f = 2;
// f = 3;
// f = 4;

// var g = 1;
// g = 2;
// g = 3;
// g = 4;
// g = 5;


/*Data Type of string, number, boolean, and undefined  */

/*GENERAL RULE */

// // 1. We want to always declare variables with const > constant variables , when we don't want to change the value inside of the variable.
// // 2. If we think we will need to change the value of a variable we can use the let keyword. 



// // console.log(typeof a);
// // console.log(typeof b);
// // console.log(typeof PLAYER1);
// // console.log(typeof PLAYER2);
// // console.log(typeof y);
// // console.log(typeof x);
// // console.log(sum);
// // console.log(typeof d);
// console.log(e);
// console.log(f);
// console.log(g);


//JAVASCRIPT IDENTIFIERS RULES 

// Identifiers > Unique names

/*
Identifiers are short names (x, b) or name, age, gender

RULE1: We can use letters, digits, underscores, and dollar sign
RULE2: Variable names must start with a letter
RULE3: Cannot use keywords.
RULE4: JS variable names are case-sensitive
*/

let apple = 'apple';
let _banana = 'banana fruit';
let $cherry = 'cherry fruit';

//let 2cherry = 'cherry fruit2'  this will not work > /RULE2: Variable names must start with a letter
let cherry2 = 'cherry fruit2';

let key = 1;
//let let = 1; // We cannot use any rerved keywords for declaring variables

let Person = 'Rod';
let person = 'Cid';

console.log(apple);
console.log(_banana);
console.log($cherry);
console.log(cherry2);
console.log(Person);
console.log(person);

/*CODE CONVENTIONS */

/*
1. JS identifiers or variable names should be descriptive
> y, b, a which are not descriptive 

let firstNumber = 70;
let lastName = 'Lopez'
let zipCode = '123'

different casing styles 
1. snake_case
2. camelCase
3. PascalCase
4. kebab-case

NOTE: that we should be consistent with what naming style convention we would want to use. 



*/
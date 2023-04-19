// CATEGORIES OF OPERATORS



// 1. Assignment operator = 
// 2. Arithmetic operators + * / -
// 3. Increment decrement operators ++ --
// 4. Modulus operator % return the division remainder
// 5. String Operators '' or "" double quotes
// 6. Function invocation operators ()
// 7. Logical Operators Logical and: && , Logical or: ||
// 8. Member Accessory operator . // Methods , Properties 
// 9. ARRAY ELEMENT ACCESS OPERATOR [] square bracket
// 10. Code Block Operators {}

/*NOTE: 
Operand Operator Operand
10         +       10
*/


var increment = 1;
increment++;

// console.log(increment);
// console.log(increment++);
// console.log(increment++);

//console.log(++increment);

var decrement = 1;
decrement--;

// console.log(decrement);
// console.log(decrement--);
// console.log(decrement--);

//console.log(--decrement);


let a = 5;
let b = 2;
let modulus = a % b;

console.log(modulus);

let m = 10 % 3;
console.log(m);


// EXPONENTIATION

let c = 5;
let d = c ** 2;

console.log(d);

let f = 5;
let g = 2;
let e = Math.pow(f, g);
console.log(e);


//STRING OPERATORS

let string1 = "Hello ";
let string2 = "World!";
let message = string1 + string2;

console.log(message);

// PRECEDENCE > This will be describing the order in which operators are performed in an arithmetic expression. 

let precedence = 1 + 2 * 3;

// PEMDAS

console.log(precedence);

let pemdas = (1+2) * 3;

console.log(pemdas);


// FUNCTION INVOCATION OPERATORS
function hello(){
    console.log('Hello Im Rod');
}


hello();

// Property accessory operator or Member Accessory operator, methods and properties

// var test = document.getElementById('test').innerHTML = 'Test';
// console.log(test);


// ARRAY ELEMENT ACCESS OPERATOR [] square bracket


let array = ['rod', 1, 'test'];

console.log(array);


// CODE BLOCK OPERATOR {}


/* 
K.U.R.A
KNOW that they exist.
UNDERSTAND how they work and what their function is.
REMEMBER 
APPLY as you write your programs
*/










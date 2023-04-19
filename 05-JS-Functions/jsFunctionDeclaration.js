// It is a block of code that is designed to perform a particular task. 
// A function can be exectued when "something" invokes it. (Calls it);


// It is a block of code that we the programmers can name and then call. 

/*
function test(num1,num2){ // Parameters are lsted inside the parentheses for a function definition 
    // instructions go here. 
    let product =  num1 * num2;
    console.log(product);
}
test(5,5); // function Arguments which are values that is received by the function when we invoke or call the function. 
*/




/*FUNCTION NAMES
1. It can contain letters
2. It can contain digits
3. It can contain underscores
4. It can contain dollar signs
*/

/*
function declareName(parameter1, parameter2){ // declare a function name
    let name; // declare a variable
    console.log('------------------------');
    
} 
*/

/*
function introduce(){ // declare a function name
    let name; // declare a variable
    console.log('------------------------');
    name = prompt("Enter your First and Last name here:");

    console.log('Hello ' + name);
    
} 

introduce(); // Invoke this funciton inside of the browser runtime environment.
*/
// FUNCTION INVOCATION 
/*
1. When an even occurs such as a user clicks a button.
2. When it is invoked or called from a javascript code. 
3. IIFE > Doing self invoked or automatically invoking itself. 
*/


// {} The Curly brackets are like containers for instructions 
// {} These are called CODE BLOCKS > It contains the body of the function 
// {} Curly brackets can contain Javascript statements or expressions.
function sayHello(){
    console.log('------------------------');
    console.log('-----------------');
    console.log('Hello Everyone!! I\m Rod!');
    console.log('----------------------');
    console.log('------------------------------');
}

//sayHello(); // Invoke and use the function inside of the node runtime environment


function storeInVariable(){
    console.log('Hello!! I\m a function stored inside of a variable displayed through a console.log inside of a function!!');
}

let a = storeInVariable(); // store a function inside of a variable declaration


a // Stored a function and invoke it by using the variable name declaration that we have. 



function storeInVariable2(){
    return 'Hello!! I\m a function stored inside of a variable displayed through a return statement inside of a function!';
}


let b = storeInVariable2();
console.log(b);


/**RETURN STATEMENT */
// If the js function reaches the return statement this will stop executing the code instructions inside of the code block.


function calculateVat(amount){
    let result = amount * .12;
    return result;
}

let vat = calculateVat(1000);
console.log(vat);


function sayHello(name){
    console.log('Hello ' + name + '!');
}

sayHello('Rod');
sayHello('Jash');
sayHello('Digs');
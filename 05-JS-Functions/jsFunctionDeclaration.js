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


function introduce(){ // declare a function name
    let name; // declare a variable
    console.log('------------------------');
    name = prompt("Enter your First and Last name here:");

    console.log('Hello ' + name);
    
} 

// FUNCTION INVOCATION 
/*
1. When an even occurs such as a user clicks a button.
2. When it is invoked or called from a javascript code. 
3. IIFE > Doing self invoked or automatically invoking itself. 
*/

introduce();

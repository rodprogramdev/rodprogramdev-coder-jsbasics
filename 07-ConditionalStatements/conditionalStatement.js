// if statement, if the condition is true.
// else if statements, if the first condition is false.
// else statments, if the condition is false.
// switch statements, specify alternative blocks of code that we want to be executed. 


// var count = 5;

// if(/*We want to evaluate an expression*/){

// }

/*
if(count == 4){
    console.log("count is 4");
}
*/

/**************************************************** */
// var count = 5;

// if(count == 5){
//     console.log("This 'if' statement is true and will display this text on the console.");
// } else{
//     console.log("This 'if' statement is false so this text should be executed on the console. ");
// }


/**************************************************** */

// var counter = 4;

// if(counter == 2){
//     console.log("Counter is equal to 2.");
// }else if(counter > 2){
//     console.log("Counter is greater than 2.");
// }else if (counter < 2){
//     console.log("Counter is less than 2");
// }else{
//     console.log("Counter is NOT 2"); // this will not be executed if the other lines of instructions are true.
// }

/**************************************************** */

/*
switch(expression){
    case x:
        // code block;
        break;
    case y:
        //code block;
        break;
    default:
        // code block;
    
}

*/

/*
let hero = 'Batman';

switch(hero.toLowerCase()){
    case 'Superman':
        console.log('Super strength.');
        console.log('X-ray vision.');
        break;
    case 'Aquaman':
        console.log('Ability to breath under water.');
        console.log('Can communicate with sea life.');
        break;
    case 'batman':
        console.log('Intelligence and Money.');
        console.log('A martial arts expert.');
        break;
    default:
        console.log('Another superhero.');

}
*/
// JAVASCRIPT DATE OBJECT
/*
new Date();
new Date(year, month, day, hours, minutes, seconds, milliseconds)
new Date (milliseconds)
new Date (date string)
*/

/*
let day = new Date();
let today = day.getDay();

switch (today){
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6: 
        day = 'Saturday';
        break;
    

    }      

    console.log(day);

*/

/*

let hero = 'Superman';

switch(hero){
    case 'Superman':
        console.log('Super strength.');
        console.log('X-ray vision.');
        break;
    case 'Aquaman':
        console.log('Ability to breath under water.');
        console.log('Can communicate with sea life.');
        break;
    case 'batman':
        console.log('Intelligence and Money.');
        console.log('A martial arts expert.');
        break;
    default:
        console.log('Another superhero.');

}
*/

// TERNARY OPERATORS 

// single line decision statements, evaluating an expression that we want to return a value, if we want to check for true or false for evaluating an inline statement. 


let player1 = 5 , player2= '5';

let result = (player1 !== player2) ? 'true' : 'false'; // Single line statement from where we are checking for true or false values. 

console.log(result);
// Function declaration and variable declaration are similar that needs an identifier or name. 

// WHAT IF WE DONT NEED AN IDENTIFIER?

// Function expression 

/*Anonymous function 
function (){

}

*/

setTimeout(function(){console.log('Hello world!!!')}, 2000);

setTimeout(function(){ // function expression example 
    console.log('I waited for 4 seconds!');
}, 4000);


let counter = 0;
function timeout(){
    setTimeout(function(){
        console.log('Test counter value: ' + counter++);
        timeout();
    }, 6000); // This will increment the value of the counter every after 6 seconds 
}

timeout();

//IIFE Immediately invoked function expression


(function(){
    console.log('Immediately Invoked Function Expression!! This is an example of Self invoked!');
})();
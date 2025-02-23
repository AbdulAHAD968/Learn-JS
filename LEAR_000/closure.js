//NOTE - CLOSURE IN JS.
// A closure is a function that has access to its own scope, 
// the outer function’s variables, and global variables, 
// even after the outer function has finished executing. 
// This enables functions to “remember” their environment.

function fun1(){
    let o = "hello world";
    console.log(o);
    function fun2(){
        console.log(o);
    }
    return fun2;
}
const help = fun1();
help();


//NOTE - Lexical Scoping
// Closures are based on lexical scoping, meaning that a function’s 
// scope is determined by where the function is defined, not where 
// it is executed. This allows inner functions to access variables 
// from their outer function.

function outer() {
    const outerVar = 'I am from outer';

    function inner() {
        console.log(outerVar);
  }
    return inner;
}
const newClosure = outer();
newClosure();


//NOTE - Private Variables
// Closures can encapsulate variables, making them private to a 
// specific function. This is commonly used in module patterns.

function counter(){
    let count = 0;
    return function(){
        count++;
        return count;
    };
};
let raise = counter();
console.log(raise());
console.log(raise());
console.log(raise());


//NOTE - Closures and IIFE
const counter = ( function(){
    let count=0;

    return{
        increment: function(){
            count++;
            console.log(`incremented the counter ${count}`);
        },
        reset: function(){
            count=0;
            console.log(`reset the counter ${count}`);
        }
    }
} () );
counter.increment();
counter.increment();
counter.increment();
counter.reset();


//NOTE - BEEFITS:
// Benefits of Closures
// Data Encapsulation: Closures enable data hiding and abstraction.
// State Management: Retain variables between function calls.
// Callbacks and Event Listeners: Simplify asynchronous code.

//FIXME - ISSUES.
// MEMORY LEAKAGE.
// Performance Overhead: Overusing closures might lead 
// to larger memory usage due to retained scopes.

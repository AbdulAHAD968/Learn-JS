// //STUB - The console object provides access to the browser’s debugging console (or terminal in Node.js).


// //NOTE -  { console.log() }
console.log('print some thing on terminal just as usual.');

// //NOTE - { console.error() }
console.error('USE CONSOLE.ERROR() FOR GIVING ERROR LABLES.');

// //NOTE - { console.warn() }
console.warn('USE CONSOLE.WARN() FOR GIVING WARNING LABLES.');

// //NOTE - { console.info() }
// // The console.info() logs informational messages, which usually appear as 
// // standard logs but can be styled differently in some environments. Using 
// // the %c flag and passing the style object as the second parameter to the 
// // function can be used to style the info message.
console.info('%cThis is a styled info message!', 'color: blue; font-size: 16px; font-weight: bold;');


// //NOTE -  { CONSOLE.TABLE() }
console.table([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);


// //LINK - its an array of objects
var people = [
    { name: 'John', age:23 , gender: 'male' },
    { name: 'Jane', age:27 , gender: 'female' },
    { name: 'Mark', age:32 , gender: 'male' }   
];

// // its just a single object...
var obj = { name: 'John', age:23 , gender: 'male' };

console.table(people);


// //FIXME - console .time() & console .timeEnd()
console.time('Execution Time');
for (var i = 0; i < 1000; i++) {
    // Code to be timed goes here
}
console.timeEnd('Execution Time');

// //FIXME - console.assert()
// // logs an error message if the given condition is false, helping to catch 
// // issues during development. If the condition is true, it produces no output.

console.assert(5 < 10, "This assertion failed");    // no output here
console.assert(5 > 10, "This assertion failed");    // output here


// //LINK - console .group() and console.groupEnd()
// // group data based on some alignment which is helpfull for data analysis
console.group("DATA INSIDE THE GROUP");
    console.log('This is inside the group');
    console.log('This is also inside the group');
console.groupEnd("exited");


// //TODO - console.count() , it counts the number of time it si called.
// // helps in tracking the number of times a specific code block is called or executed.
console.count("COUNT LABEL ");  
console.count("COUNT LABEL "); 
console.count("COUNT LABEL ");
console.count("COUNT LABEL ");


// //NOTE - console.trace()
// // help in keeping the tack of the function's [ Stack Trace ]...
function a(){
    b();
}
function b(){
    c();
}
function c(){
    console.trace();
}
a();


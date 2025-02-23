
// // making a void function.
function test(s){
    console.log(s);
}

test("helllo world");


// //  JUST A SIMPLE CALCULATOR.
const takeinput = require("readline-sync");
var num1 = parseFloat(takeinput.question("Enter the first number :"));
var num2 = parseFloat(takeinput.question("Enter the second number :"));
var operator = takeinput.question("Enter the operator");

// function to perform arithmetic operations
function calculate(opt){
    switch(opt){
        case '+':{
            return num1 + num2;
        }
        case '-':{
            return num1 - num2;
        }
        case '*':{
            return num1 * num2;
        }
        case '/':{
            if(num2!= 0){
                return num1 / num2;
            }
            else{
                return "Error: Division by zero!";
            }
        }
        default:{
            return "Error: Invalid operator!";
        }
    }
}

var result = calculate(operator);
console.log("Result: ", result);



// FUNCTION TO MIND THE MAXIUM AND MINIMUM IN AN ARRAY.
function findMax(array){
    let max = array[0];
    for(let i=0 ; i<array.length ; i++){
        if(array[i] > max){
            max = array[i];
        }
    }
    return max;
}

// // prompting the user to enter array.
const takeinput = require('readline-sync');

var size = parseInt(takeinput.question('Enter the length of the array : '));

var array = [];
for(let i=0 ; i<size ; i++){
    array.push(parseInt(takeinput.question(`Enter element ${i+1} : `)));
}

console.log('Array :', array);

var max = findMax(array);

console.log('Maximum :', max);


///////////////////////////////////////////////


//NOTE - FUNCTION EXPRESSION.
// actually a function decleration without function name.

// Syntax:
let geeksforGeeks= function(paramA, paramB) {
    // Set of statements
}

//example:
const save = function(a,b){
    return a + b;
}
console.log(save(5, 10)); // 15



///////////////////////////////////////////////


//NOTE - ARROW FUNCTIONS.
let function_name = (argument1, argument2) => expression

const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];
const a1 = a.map(function(s){
    return s.length;
});
console.log(a1); // [8, 6, 7, 9]

// // we can use arrow function as well, to create a shallow copy.
console.log( a.map( (s) => s.length) );


///////////////////////////////////////////////


//NOTE - IMMEDIATELY INVOKED FUNCTIONS.
// this provides encapsulation of data decleared inside from other code blocks.
// also the reason for automatic call is '()', which indicates that it is
// a script.
(function(w){
    console.log('Hello from IIFE!');
})();


///////////////////////////////////////////////


//NOTE - CALL BACK FUNCTIONS.
// recive other function's reference as a parameter, executed when
// invocked.
function hello(num , fun1){
    return fun1(num);
};
var fun1 = (n) => n*n;
console.log(hello(10,fun1) );


///////////////////////////////////////////////


function outerFun(a) {
    function innerFun(b) {
        return a + b;
    }
    return innerFun;
}
const addTen = outerFun(10);
console.log(addTen(5));


///////////////////////////////////////////////

//NOTE - ANONYMOUS FUNCTIONS, DEFINED IN LIBRARY.
setTimeout(function() {
    console.log("Hello from timeout");
},3000);


///////////////////////////////////////////////


//LINK - NESTED FUNCTIONS.
function a(c) {
    function b(d) {
        return c + d;
    }
    return b; // returns function b
}
const temp = a(10); // temp is assigned the function b
console.log(temp(5)); // calls b with argument 5

///////////////////////////////////////////////


//NOTE - Pure Functions
// THEY DON'T MUTATE THE VALUES DECLEARED AND DEFINED OUTSIDE THE FUNCTON
// SCOPE.

///////////////////////////////////////////////


//NOTE - SOME PRO TIPS.
// Choosing the Right Function Type
//   =>  Use function declarations for regular reusable functions.
//   =>  Use arrow functions for concise, one-line functions.
//   =>  Use IIFE for code that runs immediately.
//   =>  Use callback functions for asynchronous operations like API calls.
//   =>  Use pure functions for predictable behavior without side effects.

///////////////////////////////////////////////


//NOTE - MAP'S
var  arr = [1,4,2,3,5,8,7];

var ass_sort = arr.sort( (a,b) => a-b);
console.log(...ass_sort);

var dis_sort = arr.sort( (a,b) => b-a);
console.log(...dis_sort);

var obj_array = [
    {name: "John", age: 25},
    {name: "Alice", age: 30},
    {name: "Bob", age: 28}
];
console.log(obj_array.map(obj_array => obj_array.name));

///////////////////////////////////////////////


///////////////////////////////////////////////


///////////////////////////////////////////////


///////////////////////////////////////////////


///////////////////////////////////////////////
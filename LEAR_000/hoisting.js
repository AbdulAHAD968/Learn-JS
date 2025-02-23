// //NOTE - DEFINE HOISTING?
// // Hoisting refers to the behaviour where JavaScript moves 
// // the declarations of variables, functions, and classes to 
// // the top of their scope during the compilation phase.

// //REVIEW - VARIABLE HOISTING IS ONLY POSSIBLE FOR THE [[-VAR-]] KEYWORDS ONLY.

// //LINK - when a variable is decleared with var keyword,
// // just the decleration is moved to the top of the scope, not the
// // initialized value.

console.log(myVariable); // Output: undefined
var myVariable = "Hello";

// //LINK - IN CASE OF A FUNCTION.
// // not just the decleration is moved to the top of the scope
// // but the whole definition is shifted to the top.

myFunction();
function myFunction() {
    console.log("Hello");   // output: hello
}


// //LINK - when a variable is declared with let or const keyword,
// // 


//NOTE - NOT WORK FOR 'LET' VARIABLE DECLERATION.
console.log(help);
let help = 90;


// //NOTE - NOT WORK FOR 'CONST' VARIABLE DECLERATION.
console.log(pp);
const pp = 100;

//FIXME - WHAT ABOUT HOISTING FOR CLASS?

let person_1 = new human("John Doe");
person.greet(); // output: ERROR!

class human{
    constructor(name){
        this.name = name;
    }
    greet(){
        console.log(`Hello, my name is ${this.name}!`);
    }
};
let person = new human("John Doe");
person.greet(); // output: Hello, my name is John Doe!



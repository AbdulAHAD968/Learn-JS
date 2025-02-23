//LINK - example of block scope.
if (true) {
    var x = 10;   // Function-scoped (not block-scoped)
    let y = 20;   // Block-scoped
    const z = 30; // Block-scoped
}

console.log(x); // Output: 10 (accessible outside the block)
//console.log(y); // Error: y is not defined (block-scoped)
//console.log(z); // Error: z is not defined (block-scoped)


console.log('\n-------------------------------\n');


//LINK - example of fuinction scope.
function example() {
    var x1 = 10;   // Function-scoped
    let y = 20;   // Function-scoped
    const z = 30; // Function-scoped
    console.log(x, y, z); // Output: 10 20 30
}
example();

// console.log(x1); // Error: x is not defined
// console.log(y); // Error: y is not defined
// console.log(z); // Error: z is not defined


console.log('\n-------------------------------\n');


const PI = 3.14;
function add(a, b) {
  return a + b;
}
module.exports = { PI, add };


console.log('\n-------------------------------\n');

//NOTE - Lexical Scope (Closures) - [case where we have nested functions...]
function outer(){
    let outerVar = "I'm in the outer scope!";
    function inner() {
        console.log(outerVar); // Accessing parent's scope
    }
    inner();
}
outer();


console.log('\n-------------------------------\n');

console.log('\n-------------------------------\n');


console.log('\n-------------------------------\n');

console.log('\n-------------------------------\n');

console.log('\n-------------------------------\n');

console.log('\n-------------------------------\n');

let globalLet = "This is a global variable"

function fun() {
    localLet = "This is a local variable"   // no more local as we havent assigned any method so itt will be assigned global variable
}
fun();
console.log(globalLet);
console.log(localLet);


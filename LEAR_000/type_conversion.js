//NOTE - EXPLICIT TYPE CASTING
// Uses built-in JavaScript methods like Number(), String(), and Boolean().


//NOTE -  string to number [WE HAVE 3 WAYS]
let str = "1234567";

// see the data type for more information
console.log(typeof str); // Output: string

// using Number();
var make_1 = Number(str)
console.log(Number(str)); // Output: 1234567

// using parseInt();
var make_2 = parseInt(str)
console.log(parseInt(str)); // Output: 1234567

// using parseFloat();
var make_3 = parseFloat(str)
console.log(parseFloat(str)); // Output: 1234567.0


console.log('\n');

//NOTE -  NUMBER TO STRING.
var number = 12345333;

// see the data type for more information
console.log(typeof number); // Output: number

// using toString();
var make_4 = number.toString()
console.log(typeof make_4); // Output: string
console.log(number.toString()); // Output: "12345333"

// using String();
var make_5 = String(number)
console.log(String(number)); // Output: "12345333"

console.log('\n');


//NOTE - BOOLEAN TO STRING.
var male = false;

// see the data type for more information
console.log(typeof male); // Output: boolean

// using toString();
var make_6 = male.toString()
console.log(typeof make_6); // Output: string
console.log(male.toString()); // Output: "false"

// using String();
var make_7 = String(male)
console.log(String(male)); // Output: "false"

console.log('\n');


//NOTE - BOOLEAN TO NUMBER.
var female=true;

var make_8 = Number(female);
console.log(typeof make_8); // Output: number


console.log('\n');


//NOTE - NOW WE WILL STUDY ABOUT IMPLICIT TYPE CONVERSIONS OR TYPE COERCION
// - Performed automatically by JavaScript.
// - Happens mostly in comparison and arithmetic operations.
// - Can lead to unexpected results if not handled properly.

//ANCHOR - Example:01 [1. String + Number]

let num4 = 5;
let str_1 = "34";

let res_1 = num4 + str_1;
console.log(typeof res_1); // Output: string
console.log(res_1);


console.log('\n');


//ANCHOR - Example:02 [2. BOOLEAN + Number]
let num5 = 20;
let check_1 = false;
let check_2 = true;

let res_2 = num5 + check_1;
let res_3 = num5 + check_2;
console.log(typeof res_2); // Output: number
console.log(res_2); //20
console.log(res_3); //21


console.log('\n');


//NOTE - 3. Comparison of Different Types
// JavaScript convert the two value of data type into the common type when we compare there values.

let num6 = 20;
let str_4 = "20";
if(num6 == str_4){
    console.log("Equal");
}else{
    console.log("Not Equal");
}


console.log("\n");


//NOTE - Javascript converts non-boolean value into the boolean value when the value is in the if statement.

let str_6 = "1";
if(str_6){
    console.log("True");
}else{
    console.log("False");
}


console.log('\n');


//STUB - Best Practices for Handling Type Conversion and Coercion
//  => Always use explicit type conversion where possible to avoid unexpected results.
//  => Use === instead of == to prevent unintended type coercion in comparisons.
//  => Convert inputs explicitly before performing operations.
//  => Use typeof to check data types before processing values.


// => Feature	   Type Conversion	 Type Coercion
// -> Performed    by Programmer	 JavaScript Engine
// -> Type	       Explicit          Implicit
// -> Control	   Full control	     Happens automatically
// -> Examples	   Number("5") → 5	  "5" - 2 → 3
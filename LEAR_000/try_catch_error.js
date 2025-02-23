//NOTE - TRY CATCH AND THROW STATEMENTS ARE USED FOR RUN-TIME ERROR HANDLING IN JS.

//ANCHOR - BASIC SYNTAX
try {
    // Code that may throw an error
} catch (error) {
    // Handle the error here
} finally {
    // (Optional) Code that runs regardless of try/catch outcome
}

//LINK - SIMPLE TRY AND CATCH CASE.
try{
    let x=10;
    console.log(y); // this will throw an error because y is not defined
}catch(error){
    console.log("Error: " + error.message);
}

//LINK - SIMPLE TRY AND THROW CASE.
function divide(a,b){
    if(b===0){
        throw new Error("Cannot divide by zero");
    }
    return a/b;
}

try{
    console.log(divide(10,2));
    console.log(divide(10,0)); // this will throw an error
}catch(error){
    console.log("Error: " + error.message);
}


//LINK - THE FINALLY SECTION!
try{
    console.log(divide(10,2));
}catch(error){
    console.log("Error: " + error.message);
}finally{
    console.log("This code will always run [its in finally].");
}

//NOTE - BUILTIN TYPE ERRORS IN JS.
// JavaScript has different built-in error types like:

// ReferenceError
// TypeError
// SyntaxError

try{
    let num=null;
    console.log(toLowerCase(num));
}catch(error){
    if(error instanceof TypeError){
        console.log("TypeError: Cannot call method 'toLowerCase' of null");
    }
    else{
        console.log("Error: " + error);
    }
}



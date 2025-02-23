//LINK - HIGHER ORDER FUNCTIONS...
// A higher-order function is a function that does one of the following:
// Takes another function as an argument.
// Returns another function as its result.

function fun() {
    console.log("Hello, World!");
}
function fun2(action) {
    action();
    action();
}
fun2(fun);
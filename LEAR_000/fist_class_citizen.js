
//NOTE - FUNCTIONS ARE CALLED FIRST CLASS CITIZENS IN JAVASCRIPT.
// WE CAN ASSIGN FUNCTION TO A VARIABLE.
// WE CAN PASS A FUNCTION AS AN ARGUMENT.
// WE CAN MAKE AN ARRAY OF FUNCTIONS.
// WE CAN USE FUNCTIONS AS PROPERTIES OF OBJECTS.
// WE CAN RETURN ANY FUNCTION FROM A FUNCTION.

//REVIEW - LETS TRY APP OF THEM ONE BY ONE.


//ANCHOR - 1. ASSIGNING A FUNCTION TO A VARIABLE.
// var test = function (name,gender){
//     return ('Hello, my name is '+ name + ', I am '+ gender + '.');
// };
// console.log(test('John', 'Male')); // Output: Hello, my name is John, I am Male.


//ANCHOR - 2. PASSING A FUNCTION AS AN ARGUMENT.
// function fun1(temp){
//     return temp*2;
// };
// function fun2(fun , num){
//     return fun(num);
// };
// console.log(fun2(fun1,30));     // outpur:60


//ANCHOR - 3. MAKE AN ARRAY OF FUNCTIONS.
// var fun_array = [
//     function add(a,b){
//         return a+b;
//     } , 
//     function subtract(a,b){
//         return a-b;
//     } , 
//     function multiply(a,b){
//         return a*b;
//     }
// ];
// console.log(fun_array[0](5,3)); // output: 8
// console.log(fun_array[1](5,3)); // output: 2
// console.log(fun_array[2](5,3)); // output: 15


//ANCHOR - 4. USING FUNCTIONS AS PROPERTIES OF OBJECTS.
// var obj = {
//     name: 'John Doe',
//     age: 25,
//     city: 'New York',
//     sayHello: function(){
//         console.log('Hello, my name is '+ this.name + '.');
//     }
// };
// const yes = obj.sayHello;
// const yes = obj.sayHello.bind(obj);
// const yes = () => obj.sayHello();
// obj.sayHello.call(obj);
// yes();


//ANCHOR - 5. RETURN ANY FUNCTION FROM A FUNCTION.
// function solve(num1){
//     return function(num2){
//         return num1 * num2;
//     };
// };
// const multiply = solve(5);
// console.log(multiply(10)); // Output: 50



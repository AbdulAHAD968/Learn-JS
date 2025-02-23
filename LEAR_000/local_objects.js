
let obj2 = {
    name: 'John Doe',
    age: 25,
    city: 'New York'
}

// //NOTE -  accessing attributes of objects using "."
console.log(obj2.name);
console.log(obj2.age);
console.log(obj2.city);

// //NOTE -  accessing attributes of objects using "[]"
console.log(obj2['name']);
console.log(obj2['age']);
console.log(obj2['city']);


console.log('\n');

// //NOTE -  check if a property exists.
console.log('name' in obj);
console.log('gender' in obj);

console.log(obj.name + "  " + obj.age + "  "+ obj.city);

console.log('\n');

// extract properties from the object
let {name, age, city} = obj;

console.log(name);
console.log(age);
console.log(city);


// //NOTE -  nested objects.

let person_1 = {
    name: 'John Doe',
    age: 25,
    city: 'New York',
    address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY'
    }
};

console.log('\n------------------------');
console.log(person_1.name);
console.log(person_1.age);
console.log(person_1.city);

// //LINK -  JavaScript Chaining Operator (?.)
// // here prefered to use "?." to avoid error throwing 
// // if the obj attribute is not available.
console.log(person.address?.street);
console.log(person.address?.city);
console.log(person.address?.state);
console.log('------------------------\n');


// //LINK - LEARN HOW TO TAKE INPUT IN "Node.js"
// const takeinput = require('readline-sync');

// var EnterAge = parseInt(takeinput.question('Enter your age = '));

// //NOTE - TERNARY OPERATORS.
let Myage=20;
(EnterAge > Myage) ? ( (EnterAge>Myage+30) ? (console.log('About to die')) : (console.log('You are an adult.')) ) : console.log("You are not an adult.");


// //FIXME - COMA OPERATOR.
// // evaluates its operands from left to right sequentially and returns the value of the rightmost operand
let n1;
let n2;
let n3;
const res = (n1=1 , n2=2 , n3=23 , n3+n1);
console.log(res);


// //LINK - BIGINT
// // BigInt operators allow calculations with numbers beyond the safe integer range.
// // Operations like addition, subtraction, and multiplication work with BigInt.
// // Use n suffix to denote BigInt literals.

let num3 = 1111111111111111111111111111111111111n;
console.log(num3); // prints: 1111111111111111111111111111111111111n


//NOTE - a new way to use loop in js.
let help = {
    name: 'Mango',
    color: 'yellow',
    shape: 'round',
    eat: function() {
        console.log('Mangoes are eaten.');
    }
}
for(let key in help){
    console.log(key ,"  =>  " , help[key]);
}


//NOTE - for of loop
let arr_1 = ['apple', 'banana', 'cherry'];
for(let fruit of arr_1){
    console.log(fruit);
}


// //NOTE - passing array in c function.
let arr = [1,2,3,4,5,6,7,8,9,10,11,12];
function getSum(ar){
    let sum = 0;
    for(let i=0; i<ar.length; i++){
        sum += ar[i];
    }
    return sum;
}

console.log("Sum of array elements: ", getSum(arr));


// //NOTE - sort array iin descending order.
arr.sort( (a,b) => b-a);

console.log("Sorted array in descending order: ", ...arr);


let person = {
    name: 'Abdul Ahad',
};

// // add a property. we can edit a property as well...
person.age = 21;
person.gender = 'Male';

for(let key in person){
    console.log(key, " => ", person[key]);
}
console.log('\n');
// delete a property.
delete person.name;
for(let key in person){
    console.log(key, " => ", person[key]);
}
// so we can add a function as well...
person.meth = function help(){
    console.log('Hello, I am a person.');
}
person.meth();


//NOTE - // diffference in "." notation and "[]" notation.
let obj_1 = {
    'na me': 'John',
    '1age': 30,
    city: 'New York'
};

console.log(obj_1["na me"]); // error
// console.log(obj.1age);  // error
console.log(obj_1["1age"]);


//NOTE - CLONNING JS OBJECTS...

//LINK - 1. BY ITERATION.
var obj = {
    name: 'John Doe',
    age: 25,
    city: 'New York'
};
var new_obj = {};
console.log(new_obj);
for(let key in obj){
    new_obj[key] = obj[key];
};
console.log(new_obj);

//LINK - 2. BY USIGN Object.assign()
// Object.assign(target, source1, source2, ...sources);
var obj = {
    name: 'John Doe',
    age: 25,
    city: 'New York'
};
var obj1 = {
    nam: 'Joh',
    ag: 2,
    ciy: 'York'
};
var new_obj = Object.assign({}, obj , obj1);
console.log(new_obj); // data of both the two objects


//LINK - 3. USING THE SPREAD OPERATOR.
var obj = {
    name: 'John Doe',
    age: 25,
    city: 'New York'
};
var new_obj = {...obj}; // creates the shallow copy of the object.
console.log(new_obj); // data of objects
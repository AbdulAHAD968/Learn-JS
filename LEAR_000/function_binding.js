//NOTE - THIS BINDING.
// By default, ‘this’ refers to the global 
// object or undefined in strict mode
const person = {
    name: 'ALI BIJLI',
    greet: function() {
        console.log(`Hello, my name is ${this.name}!`);
    }
};
const yes = person.greet;
yes(); //Hello, my name is UNDEFINED!


//LINK - Methods of Function Binding

// 1. Bind a function to a specific object using the bind() method

const person1 = {
    name: 'ALI BIJLI-1',
    greet: function () {
        console.log(`Hello, my name is ${this.name}!`);
    }
}
const greetPerson = person1.greet.bind(person1);
greetPerson(); //Hello, my name is ALI BIJLI!


// 2. Arrow functions do not bind their own 'this' value,
// so it uses the 'this' value of the enclosing scope (or global scope)

const person2 = {
    name: 'ALI BIJLI-2',
    greet: function () {
        console.log(`Hello, my name is ${this.name}!`);
    }
}

const greetPersonArrow = () => person2.greet();

greetPersonArrow(); //Hello, my name is ALI BIJLI!


// 3. Call() method can be used to manually bind 'this' value
const person3 = {
    name: 'ALI BIJLI-3',
    greet: function () {
        console.log(`Hello, my name is ${this.name}!`);
    }
}

person3.greet.call(person3); //Hello, my name is ALI BIJLI!
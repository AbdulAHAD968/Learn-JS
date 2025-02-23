// let array = [10,20,30,40 , 200 ,50,60,70,80,90,100];

// // simple print of array.
// console.log(array);

// // by using the ... operator creates a shallow copy of the array
// console.log(...array);

// // by using join operator.
// console.log(array.join('->'));

// // by using forEach method.
// array.forEach(function(value) {
//   console.log(value);
// });

// // maping array to its double.
// let doubledArray = array.map(value => value * 2);
// console.log(doubledArray);

// // sort it 
// console.log( doubledArray.sort( (a,b) => b-a ) ) ;

// let tri = array.map(value => value*3);
// console.log(tri.join('->'));

// let et = array.map(x => x*8);
// console.log(et.join('->'));



// var array = [11, 51, 58, 61, 65, 67, 72, 73, 75, 78, 80, 97];

// console.log(array.sort( (a,b) => a-b));



// //array.splice(startIndex, deleteCount, item1, item2, ...);
// // if we set the deleteCount to 0 then we can add the item
// array.splice(0,0,'mango');
// console.log(array);



// var a = 10;
// var b = a;
// a=30;
// console.log(a);
// console.log(b);



//NOTE - for each loop.
// var fruits = ['apple','mango','banana','orange','grapes'];
// fruits.forEach(function(f){
//     console.log(`i love ${f}`);
// });
// var array =  [1,2,3,4,5,6];
// array.forEach(function(n, idx){
//     console.log(`The element is ${n} at ${idx}`);
// })
// console.table(array);


//NOTE - For of loop in JavaScript

// var fruits = ['apple', 'orange', 'mango', 'gava'];
// for(let f of fruits){
//     console.log(f);
// }


//NOTE - FOR IN LOOPS...

// let obj = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
// };
// for(let key in obj){
//     console.log(key, obj[key]);
// }


//LINK - MAKING PAIR OF ARRAY. AND ALSO EXLPORING THE
// SPECIALITY SORTING FUNCTION, BASED ON FIRST ELEMENT OF PAIR
// OR THE SECOND ELEMENT.
// let rem_1 = [1,3,2,4,7,5];
// let rem_2 = [2,4,7,9,1,6];
// let rem = [];
// for(let i=0 ; i<rem_1.length ; i++){
//     rem.push([rem_1[i] , rem_2[i]]);
// }
// rem.sort( (a,b) => a[1]-b[1]);
// console.log(...rem); // Output: [ 7, 1 ] [ 1, 2 ] [ 3, 4 ] [ 5, 6 ] [ 2, 7 ] [ 4, 9 ]

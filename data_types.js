// number= Number is the types of the the data types which stores the number value 
let x=40;
console.log(x);
console.log(typeof x);


// string= string is the types of the data types which stores the  set of the characters  which is denoted in the single quotes or double quotes.
const name="harshit"
console.log(name);
console.log( typeof name);


// undefined= undefined is thye that type of data type of data setructure which have not assign any value.

let p;
console.log(p);
console.log(typeof p);


// boolean = boolean is the that type of the data structure which is basically give the output in true or false.
let A=40;
let b=30;
console.log(A==b);
console.log( typeof A==b);

// null= Null is the that types of data structure which holds only nulll types value.
let S= null
console.log(S);
console.log( typeof S);


// BigInt= BigInt is the the types of the data structure which stores the types of data structure which stores the value greater then 2**53-1 
let bigInt=151541541548454154515445156484215554554895656n
console.log(bigInt);
console.log(typeof bigInt);




///************************non primitive type data structure..****************************************/
//  Non-primitive data types are called user defined which is built using premitive types data structure and are designed to store the organized comlplex data.
// these are two types of the data data structure 
// Object
// Array
// date
// function


// Object == object types data structure which basically stores in key- value pairs.
 let person= {
    Name:"Harshit",
age:40
};
console.log(person);

// Array==Array is the types of the data structure which stores the multiple data types like number string and character.

let AArray=["harshit",4,"harshdeep"]
console.log(typeof AArray);
console.log(AArray);
console.log(Array.isArray(AArray));



// Function= function is the block of code which perform some specific task and and the reuseable block of code.
function greet(name){
    return "hello,"+name;
}
console.log(greet("harshita"));



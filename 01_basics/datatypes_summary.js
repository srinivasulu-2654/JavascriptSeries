// # primitive data types

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null // typeof is object
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123');

console.log(id === anotherId);

const bigNumber = 48747897448744322n

// Reference types (or) Non primitive

// Array, Objects, Functions

const heros = ["Shaktiman","naagraj","doga"]; // array
let myObj = 
{
    name : "sreenu",
    age : 18
};   // objects

const myFunction = function(){
    console.log("Hello world");
}

// // https://262.ecma-international.org/5.1/#sec-11.4.3

// ***********************************************

// Stack(used by Primitive data types), heap(Non-primitive)

let oneName = "sreenu"

let anotherName = oneName
anotherName = "chaiaurcode"

console.log(oneName)
console.log(anotherName);

let userOne = {
    email : "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "sreenu@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
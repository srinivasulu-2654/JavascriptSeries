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
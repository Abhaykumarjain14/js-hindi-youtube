// #Primitive

// 7 types : String, number , boolean, null, undefined, symbol(unique value), BigInt

/*

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;


const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 23442322332;
console.log(typeof bigNumber);

*/

//Reference type (Non Primative)

// Array , objects,Functions

const id = Symbol('123')

const heros = ["shaktiman","naagraj","doga"];
let myObj = {
    name : "hitesh",
    age : 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);

console.log(typeof heros);

console.log(typeof id);
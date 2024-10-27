// Primitive 

// 7 types : string, number, boolean, null, undefined, symbol, bigInt

// dynamically typed language
const score = 100
const scoreValue = 100.3

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman","naagraj","doga"]

let myObj = {
    name : "rebanto",
    age : 22
}

const myFunction = function(){
   //console.log("Hello World!!!");   
}

//console.log(typeof myFunction);


// *****************************************************************

// Stack (Primitive), Heap(Non-Primitive)

let myYoutubeName = "frost"

let anotherName = myYoutubeName;
anotherName = "franatic"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne;

userTwo.email = "franatic@google.com"

console.log(userOne.email);
console.log(userTwo.email);



// if statement
// const isUserloggedIn = true;
// const temperature = 41

// if(temperature < 50){
//   console.log("less than 50");
// } else {
//     console.log("greater than 50");    
// }

// <, >, <=, >=, ==, !=, ===

// const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`User power: ${power}`);    
// }
// console.log(`User power: ${power}`);    

const balance = 1000

// if(balance > 500) console.log("test");       // implicit scope

// if (balance < 500) {
//    console.log("less than");  
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else {
//     console.log("less than 750");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = true;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard) {
    console.log("Allowed to buy courses");    
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in");    
}

// Nullish Coalescing Operator (??): null undefined

let val1;

// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15

// val1 = null ?? 10 ?? 20 

// Ternary Operator 

// condition ? true : false 

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");



function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("J");
    console.log("K");
    console.log("L");
}

 // sayMyName()

// function addTwoNumbers(number1, number2){
//    console.log(number1 + number2);   
// }

function addTwoNumbers(number1, number2){
//    let result = number1 + number2;
//    return result;
return number1 + number2;
}

const result = addTwoNumbers(3, 5);

// console.log("Result: ", result);

function loginUserMessage(username = "sam"){
   if(!username){
     console.log("Please enter a username");
     return;
   }
   return `${username} just logged in`
}

// console.log(loginUserMessage("franatic"))
// console.log(loginUserMessage())

function calculateCartPrice(...num1){      // ... -> rest,spread
    return num1;
}

console.log(calculateCartPrice(200, 400, 500, 5000));
const user = {
    username : "franatic",
    price: 199

}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 600]));

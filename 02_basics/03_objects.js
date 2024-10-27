// singleton

// Object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "franatic",
    "full name": "franatic lee",
    [mySym] : "mykey1",
    age: 21,
    location: "Jaipur",
    email: "franatic@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email="franatic@chatgpt.com";
// Object.freeze(JsUser);
JsUser.email="franatic@microsoft.com";
// console.log(JsUser);

JsUser.greetingOne = function(){
    console.log("Hello JS user");
    
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    
}

console.log(JsUser.greetingOne());
console.log(JsUser.greetingTwo());








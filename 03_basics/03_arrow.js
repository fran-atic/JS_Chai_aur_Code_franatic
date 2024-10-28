const user={
    username: "franatic",
    price: 999,

    welcomeMessage: function(){
       console.log(`${this.username} , welcome to the website`);
    //    console.log(this);
       
    }
}

// user.welcomeMessage();
// user.username = "Sam"
// user.welcomeMessage();

// console.log(this);

// function chai(){
//     let username = "franatic"
//     console.log(this.username);    
// }

// chai()

const chai = () => {                     // arrow function
   let username = "franatic";
   console.log(this);
   
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// const addTwo = (num1, num2) => (num1 + num2);  // implicit return 
const addTwo = (num1, num2) => ({username : "franatic"});  

console.log(addTwo(3, 5));




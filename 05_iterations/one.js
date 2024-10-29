// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        // console.log("5 is the best number");   
    }
    // console.log(element); 
}

// console.log(element);

for (let i = 0; i < 5; i++) {
    // console.log(`outer loop values: ${i}`);
    
    for (let j = 0; j < 5; j++) {
        // console.log(`inner loop values: ${j} and inner loop ${i}`);   
    }
}

let myArray = ["flash", "batman", "superman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);    
}

// break and continue 

// for (let index = 1; index < 20; index++) {
//     if(index == 5){
//         console.log(`5 detected`);
//         break;        
//     }
//     console.log(`Value of i is ${index}`);    
// }

for (let index = 1; index < 20; index++) {
    if(index == 5){
        console.log(`5 detected`);
        continue;        
    }
    console.log(`Value of i is ${index}`);    
}

    
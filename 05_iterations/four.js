const myObject = {
    js : 'JavaScript',
    cpp : "C++",
    rb : "ruby",
    swift : "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);    
}

const programming = ["js", "ruby", "java", "python", "cpp"]

for (const key in programming) {
//    console.log(programming[key]);   
}

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");

// for (const key in map) {               // maps are not iterable
//    console.log(key);   
// }
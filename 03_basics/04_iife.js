// Immediately Invoked Function Expressions (IIFE)
// to remove global scope pollution
(function chai(){
    console.log('DB CONNECTED');
    
})();

( (name) => {
  console.log(`DB CONNECTED TWO ${name}`);  
}) ('franatic')



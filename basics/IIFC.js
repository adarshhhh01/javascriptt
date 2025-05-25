// Immediately invoked function expression(IIFE)
(function chai(){ //this is named IIFE
    console.log(`DB CONNECTED`);
})();
// here generaly we have to use ; to complete the functions

((name)=>{
    console.log(`DB connected Two ${name}`)
})(`adarsh`)
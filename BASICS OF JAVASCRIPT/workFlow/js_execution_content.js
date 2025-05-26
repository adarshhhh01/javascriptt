//if 
// const inUserLoggedIn = true

// if (isUserLoggedIn){

// }
// <,>, <=, >= ,==, !=, ===, !==


// const balance = 1500

// if (balance < 500){
//     console.log("less than 500");
    
// }else if (balance < 700){
//     console.log("less than 700");
    
// }else if (balance <1500){
//     console.log("equals 1500");
    
// }else if(balance < 2000){ 
//     console.log("less than 2000");
    
// }



const userLoggedIn = true
const debitcard = true
if (userLoggedIn && debitcard){ // all the conditon should have to be true(AND operation)
    console.log(`Allow to buy the new courses`);
}

if (LoggedInFromGoogle || LoggedInFromEmail){// logged in through only of the one source , OR operation.
    console.log("user logged in");
}
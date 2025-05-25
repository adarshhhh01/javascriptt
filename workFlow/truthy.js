// this is Generally a rule inside the js where the user only have to check either the userEmail is founded or not 




// const userEmail= ("adarshnamdeo.ai")
// if (userEmail){
//     console.log("User have email")
// }else {
//     console.log(`user don't have email`);
    
// }
// user have emial




// const userEmail= ("")
// if (userEmail){
//     console.log("User have email")
// }else {
//     console.log(`user don't have email`);
    
// }
// //user don't have email




const userEmail= [('')]
if (userEmail){
    console.log("User have email")
}else {
    console.log(`user don't have email`);
    
}

//user have email


// type of falsy value
//  false, 0 , -0, BigInt 0n, "", null, undefined, NAN (not a number)


// remaining values are truthy value
// special value
// "0", 'false', " ", [], {}, Function(){}
//these are the types of truthy values

//*****************nullish coalescing operation********************
//nullish coalescing operation (??): null undefined
val1= 5?? 10
val2 = null??20
val3 = undefined?? 30
console.log(val1, val2, val3);





//*****************Turnisary operator********************

const iceTeaprice= 100
iceTeaprice <= 80 ? console.log(`less then 80`): console.log(`more then 80`)
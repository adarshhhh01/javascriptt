//there are total of 2 types of memory 
/** 1. stack - primitive type
 * 2. heap- non primitive type
 */

let myYoutubeName= 'vocalistaddy';
let anotherName = myYoutubeName  //reference
anotherName= "chaiOrCode"
console.log(myYoutubeName)
console.log(anotherName)

let userOne ={
    email: "user@google.com"
    upi : "user@ybl"
}

let usertwo = userOne

usertwo.email =" adarsh@gmail.com"

console.log(userOne.email);
console.log(usertwo.email);

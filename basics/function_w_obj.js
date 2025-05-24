// //funtion help to create a task which will use to runn more then one time in your programming
// function myConst(){
//     console.log("A")
//     console.log("D")
//     console.log("A")
//     console.log("R")
//     console.log("S")
//     console.log("H")

// }
// myConst() //function call

// function addTwoNumber (number1, number2){ //when we taking here the number then we call it partameters

//     console.log(number1+number2);

// }
// const result = addTwoNumber(3,4)// passing arguement
// console.log("result", result);


// function addTwoNumber (number1, number2){ //when we taking here the number then we call it partameters

//     let result=  number1+number2
//     return result
//     // console.log(number1+number2);
// }
// const result = addTwoNumber(3,4)// passing arguement

// console.log("result:", result);

// // addTwoNumber()



// function loginUsermessage(username){
//     if (username=== undefined)
//     {
//         console.log( "please enter a valid username")
//         return ;
//     }
//     return `$ {username} just logged in`


// }
// console.log(loginUsermessage()) //please enter a valid username
// //undefined

// // in javascipt the empty string is said to be underfine if("") or false.. this is all happend due to " ! ";

// function loginUsermessage(username){
//     if (!username)
//     {
//         console.log( "please enter a valid username")
//         return ;
//     }
//     return `$ {username} just logged in`


// }
// console.log(loginUsermessage()) //please enter a valid username



function calculateCarPrice(...num1){
    return num1
}
console.log(calculateCarPrice(200,400,500,600)) //[ 500, 600 ]



function calculateCarPrice(num1,num2, ...num){
    return  num;
}
console.log(calculateCarPrice(200,400,500,600)) // [ 500, 600 ]


// here/** the ... was known as rest operation and sprit operation as well */

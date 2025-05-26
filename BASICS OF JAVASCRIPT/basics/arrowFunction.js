// const user = {
//     userName: "adarsh",
//     price : 999, 

//     welcomeMessege: function(){
//         console.log(`${this.userName}, welcome to website`)
//         console.log(this);  // here the " this " function is use to inside the current content which is actually inside the scope
        
//     },
    
    
    
// }

// user.welcomeMessege()/**adarsh, welcome to website
// {
//   userName: 'adarsh',
//   price: 999,
//   welcomeMessege: [Function: welcomeMessege]
// }
//  **/


// user.userName="raghu"
// user.welcomeMessege() /**raghu, welcome to website
// {
//   userName: 'raghu',
//   price: 999,
//   welcomeMessege: [Function: welcomeMessege]
// } */

// " this" is only run with objects , ye function ke ander akr kaam nhi kr rha hai






// function chai(){
//      let username = "Adarsh "
//      console.log(this)
// }
// chai()




// ******************arrow *********************

const chai = ()=> {
    let username = "adarsh"
    console.log(this);

}

chai()





// const addTwo = (/**add perameters */num1,num2)=> {
//     return num1 +num2
    
// }

// console.log(addTwo(3,4));  //output 7



const addTwo = (/**add perameters */num1,num2)=>  num1 +num2
console.log(addTwo(3,4)); // implecit method
// herer when we use { // curly bractes } then we have to use return keyword otherwise we dont have to use it


const user = ( /*parameter */) => ({username :"adarsh"})
console.log(user(user))
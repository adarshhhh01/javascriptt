// //objects literals

// const jsUSer= {
//     name: "Ravi",
//     age : 21,
//     email: " adaeshnamdeo@gmail.com",
//     isLoggedIn : false,
//     lastLoginDays:["monday", "Tuesday"],
//     [mySym]: "myKey1"
// }

// console.log(jsUSer.email)
// console.log(jsUSer["email"])
// console.log(jsUSer["mySym"])
// //to access as a symbol use []



const tinderUser = new Object() // singleton object 
// const tinderUser= {} // non singleton object

//  tinderUser.id = "123abc"
//  tinderUser.name = "123abc"
//  tinderUser.isLoggedIn = "123abc"
// //  console.log(tinderUser);

 const regularUser = {
    email: "some@gmail.com",
    userFullName: {
        firstName : " Adarsh",
        lastName : "Namdeo"
    }
 }
//  console.log(regularUser.userFullName);

const obj1 = {1:"a", 2:"B"}
const obj2 = {3:"c", 4:"d"}

// const obj3= {obj1, obj2}; //{ obj1: { '1': 'a', '2': 'B' }, obj2: { '3': 'c', '4': 'd' } }
// const obj3 = Object.assign(obj1, obj2)  //{ '1': 'a', '2': 'B', '3': 'c', '4': 'd' }
// const obj3 = Object.assign({},obj1, obj2)  // know to be good practice{ '1': 'a', '2': 'B', '3': 'c', '4': 'd' }
// const obj4= {...obj1,...obj2}
// console.log(obj3)
// console.log(obj4)   //{ '1': 'a', '2': 'B', '3': 'c', '4': 'd' }


// user[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));


// *******************objects destructureing *****************

const course = {
    courseName: " js in hindi",
    price: "999",
    courseInstructor: "adarsh"

}


///course.constructor

const {courseInstructor:instructor}= course
console.log(courseInstructor);
console.log(instructor);


// {
//     "name" : "adarsh"
//     "courseName": "Js in hindi"
//     "price":"free"
// }
// // Date
// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());


// // let myCreatedDate = new Date(2004, 0, 30)
// // let myCreatedDate = new Date(2004, 0, 30, 4, 20)
// // let myCreatedDate = new Date("2004-01-14") //yyyy-mm-dd
// let myCreatedDate = new Date("03-5-2025") //yyyy-mm-dd
// // console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));



let newDate= new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());



newDate.toLocaleString('default',{
    weekday: "Long",
    
    
}
)


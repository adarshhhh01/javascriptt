const myNum= [1,2,3]
// const myTotal = myNum.reduce((acc , currval) =>{
//     console.log(`acc:${acc} and currval:${currval}`)
//     return acc+ currval
// },0)
// console.log(myTotal)

// arrow function
const myTotal= myNum.reduce((acc, currval)=> acc+currval,0)
console.log(myTotal)
//1+2+3 

//6 is the output


const shoppinCart = [{
    itemName :"js course",
    price:999
},{
    itemName :"py course",
    price:1999
},{
    itemName :"C++ course",
    price:2999
},{
    itemName :"ruby course",
    price:3999
}]

const totalPrice= shoppinCart.reduce((acc, item)=>acc+item.price, 0)
console.log(totalPrice)
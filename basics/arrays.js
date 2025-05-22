const myArr = [ 0,1,2,3,4,5,6] //objects can be resizeable
const myHeros = ["shatiman", "nagraj"]
const myArr2 = new Array (1,2,3,4,5)
// console.log(myArr[0])

// arry copy can create shallow copy
//shallow copy of an object is a copy whose properties share the same reference (point to the same underlying values) as those of the sources object from which the copy was made.
// A deep copy of an object is a copy whose properties do not share the same refernce(point to the same underfying values) as those of the sources object from which the copy was made.

//  ARRAY methos

// myArr.push(6)
// myArr.push(7)
// myArr.pop(4)

// myArr.unshift(9)// adds the number in the starting of the array
// myArr.shift()// remove the number in the starting of the array
// myArr.shift()// remove  the number in the starting of the array

// console.log(myArr.includes(9)); //boolean value // false
// console.log(myArr.indexOf(9)); // index value // -1 is not exist

// const newArr = myArr.join()
// console.log(myArr);
// // console.log(typeof newArr);



// slice or splice

console.log("A", myArr)
const myn1 = myArr.slice(1,3)

console.log( myn1);  // [1,2]
console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log("c", myArr); //[0,4,5,6]
console.log(myn2);


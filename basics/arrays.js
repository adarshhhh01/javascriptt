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

// console.log("A", myArr)
// const myn1 = myArr.slice(1,3)

// console.log( myn1);  // [1,2]
// console.log("B", myArr);

// const myn2 = myArr.splice(1,3)
// console.log("c", myArr); //[0,4,5,6]
// console.log(myn2);


// Marvel_hero= [ "thor", " Ironman", " Captain America"]
// Dc_hero= ["flash", "batman", "superman"]

// all_Heros= Marvel_hero.concat(Dc_hero)// to merge the  both
// console.log(all_Heros)

// const all_new_heros= [...Marvel_hero,...Dc_hero]
// console.log(all_new_heros);


const another_array= [1,2,4,[3,6,5],23,54,23,[34,23,1,1,[12,23,45,65,]]]
console.log(another_array.flat( Infinity)) //flat usage

console.log(Array.isArray("adarsh")) //checking its array or not (answer in true or false)
console.log(Array.from("adarsh")) // converting into array
console.log(Array.from({name:"adarsh"})) // interesting point //  "[]"

let score1 =100;
let score2=200;
let score3 =300;
let score4 =400;

console.log(Array.of(score1,score2,score3,score4))

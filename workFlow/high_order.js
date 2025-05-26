const arr = [ 1,2,3,4,5]

for (const num of arr) {
   // console.log(num);
}


const greeting = "HELLO WORLD"
for (const greet of greeting) {
    
    // console.log(`${greet} is the part of Greeting`)
}


//MAPS 

/* 
The maos objects holds key- value pairs and remember t
he original insertion order of the keys. Any value (both
objects and primitive values ) may be used as either a
key or a value.
maps only allow the unique value( no repetition of the value)
 */

const map = new Map()
map.set ('IN', "India")
map.set ('USA', "United States")
map.set ('FR', "France")
map.set ('UK', "United kingdom")
map.set ('AUS', "Australia")
map.set ('AUS', "Australia")
// console.log(map)



for (const [Key , value] of map) {
    // console.log(`${Key}`);
    
    
}

for (const [Key , value] of map) {
    // console.log(`${value}`);
    
    
}


// *************for objects******************


const myObj= { 
    "game1": "Cricket",
    "game2": "Table tanis",
    "game3": "Football"
}
// for (const [name,game] of myObj) {
    // console.log(`${game}`)  ///not iteratable
// }
/// we should not able to use forof fucntion to make loop work
// so we choose forin function

for (const [key, game] in myObj) {
        console.log(game);
}
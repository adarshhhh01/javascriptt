// for 
for (let i = 0; i <=10; i++) {
    const element = i;
    console.log(element);
}

for (let i = 1; i <=10; i++) {
    console.log(`Outer loop vlaue : ${i}`);
    
     for (let j= 1; j <=10; j++) {
        // console.log(`Inner loop value${j} and inner loop ${i}`);
        //console.log(`${i} * ${j}= ${i*j}`)
        
     }
    
}



// ************break ******************

for (let index = 1 ; index<=20; index++){
    if (index==5){
        console.log(`system detected 5`);
        break;
    }
    console.log(`value of i is ${index}`);
}



//*********************continue************* */
for (let index = 1 ; index<=20; index++){
    if (index==5){
        console.log(`system detected 5`);
        continue;
    }
    console.log(`value of i is ${index}`);
}

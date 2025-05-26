// // switch (key) {
// //     case value:
        
// //         break;

// //     default:
// //         break;
// // }


const month = 3
switch (month) {
    case 1:
        console.log("january")
        break;
    case 2:
        console.log("feburary")
        break;
    case 3:
        console.log("march")
        break;
    case 4:
        console.log("April")
        break;
    case 5:
        console.log("May")
        break;
    case 6:
        console.log("June")
        break;
    case 7:
        console.log("July")
        break;
    case 8:
        console.log("Augest")
        break;
    case 9:
        console.log("Septemeber")
        break;
    case 10:
        console.log("Octuber")
        break;
    case 11:
        console.log("November")
        break;
    case 12:
        console.log("December")
        break;

    default:
        console.log("key does not match")
        break;// break generally use to stop the execution of the remaining code when once is key is founded 
}


// if want to check for the string then we have to direcly check for the string 
// example

const months= "April"
switch (months) {
    case "Jan":
        console.log("january")
        break;
    case "feb":
        console.log("feburary")
        break;
    case "march":
        console.log("march")
        break;
    case "April":
        console.log("April")
        break;
}

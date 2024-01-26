function sayMyname(){
    console.log("A")
    console.log("b")
    console.log("h")
    console.log("a")
    console.log("y")
}
// sayMyname()

// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1,number2){
    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result =  addTwoNumbers(2,3)

// console.log("Result:", result);

function loginUserMessage(username = "sam"){
    // if(username === undefined){
    //     console.log("Please enter the username");
    //     return
    // }

    if(!username){
        console.log("Please enter the username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("hitesh"))
console.log(loginUserMessage())
// let var const are three keywords

//var is a global scope

// let a = 10;
// const b = 20;
// var c = 30;
let a = 300;

// let has block scope

if(true) {
    let a = 10;
    const b = 20;
    // var c = 30;
    console.log("Inner:",a);
}

console.log(a);
// console.log(b);
// console.log(c);
/*

function one(){
    const username = "Abhay";

    function two(){
        const website = "YouTube"
        console.log(username);
    }

    // console.log(website);
    two();
}

one();

*/

// if (true) {
//     const username = "hitesh"
//     if(username === "hitesh"){
//         const website = " youTube"
//         console.log(username + website);
//     }
//     // console.log(website);
// }
// // console.log(username);



// function addone(num){
//     return num + 1;
// }
// addone(5);
// console.log(addone(5));

const addTwo = function(num){
    return num + 2;
}
console.log(addTwo(2))

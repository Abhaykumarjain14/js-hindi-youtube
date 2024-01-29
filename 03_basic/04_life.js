// Immediately Invoked Function Expression (IIFE)

// function chai(){
//     console.log(`DB CONNECTED`)
// }

// chai()

(function chai(){
    console.log(`DB CONNECTED`)  //named iife   
})()

// (defination of a function)(call)


((name) =>{
    console.log(`DB Connected two ${name}`);
})(`hitesh`)

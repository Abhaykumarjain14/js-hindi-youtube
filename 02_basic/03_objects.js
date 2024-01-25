//singleton
//object create

// Object literals

const jsUser = {
    name : "Hitesh",
    age: 18,
    mySym : "mykey1",
    location: "Jaipur",
    email : "abhayjain@gmail.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday","Tuesday"]
}

// console.log(jsUser.name)
// console.log(jsUser["email"])
// console.log(jsUser[mySym])

jsUser.greeting = function(){
    console.log("Hello JS user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
jsUser.greeting();
jsUser.greetingTwo();
// console.log(jsUser.greeting());
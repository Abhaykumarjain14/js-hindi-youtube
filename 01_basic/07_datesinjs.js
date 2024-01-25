let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString);
console.log(myDate.toLocaleString);
console.log(typeof myDate);

let myCreateDate = new Date(2023,0,23)
console.log(myCreateDate.toDateString());
console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);

console.log(Date.now()/1000);

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
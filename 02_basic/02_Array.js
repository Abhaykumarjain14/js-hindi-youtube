const marvel_heros = [ "thor", "Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]  

// marvel_heros.push(dc_heros)
// marvel_heros.concat(dc_heros)

// const allHeros = marvel_heros.concat(dc_heros)
// const all_new_Heros = marvel_heros.concat(dc_heros)
// console.log(allHeros);
const all_new_Heros = [...marvel_heros,...dc_heros]
console.log(all_new_Heros);

const another_array = [ 1,2,3,[4,5,6],7, [6,7,[4,5]]]
// console.log(another_array);

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

// console.log(Array.isArray("Hitesh"))

// console.log(Array.isArray(["Hitesh","abhay"]))
// console.log(Array.from("Abhay"))

let score1 = 100;
let score2 = 200;
let score3 = 300;
    
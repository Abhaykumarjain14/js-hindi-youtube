const marvel_heros = [ "thor", "Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]  

// marvel_heros.push(dc_heros)
// marvel_heros.concat(dc_heros)

// const allHeros = marvel_heros.concat(dc_heros)
// const all_new_Heros = marvel_heros.concat(dc_heros)
// console.log(allHeros);
const all_new_Heros = [...marvel_heros,...dc_heros]
console.log(all_new_Heros);

console.log("1. üzi")
export function getKeres(vegpont, callback){
    fetch(vegpont)
        .then((response) => response.json())
        .then((data) => { callback(data); })
        .catch((err) => { console.log(err); });
}

getKeres("adatok.json",megjel)
getKeres("https://pokeapi.co/api/v2/pokemon/ditto",megjelpokemon)
console.log("2. üzi")
function megjel(adat){
    console.log(adat)
    
}
function megjel2(adat){
    $("body").append(`<h2>${adat.activity}</h2>`)
}

function megjelpokemon(adat){
    $("body").append(`<h2>${adat.name}</h2>`)
    $("body").append(`<h2>${adat.ability}</h2>`)
    $("body").append(`<img src=${adat.sprites.front_default} alt="">`)
}
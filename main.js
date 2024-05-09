
console.log("1. üzi")
export function getKeres(vegpont){
    fetch(vegpont)
        .then((response) => response.json())
        .then((data) => {console.log(data)})
        .catch((err) => {console.log(err)})
}
console.log("2. üzi")
getKeres("adatok.json",megjel)
getKeres("https://pokeapi.co/api/v2/pokemon/ditto",megjelpokemon)

function megjel(adat){
    console.log(adat)
    console.log();
}
function megjel2(adat){
    $("body").append(`<h2>${adat.activity}</h2>`)
}

function megjelpokemon(adat){
    $("body").append(`<h2>${adat.name}</h2>`)
    $("body").append(`<h2>${adat.ability}</h2>`)
    $("body").append(`<img src=${adat.sprites.front_default} alt="">`)
}
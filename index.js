const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
 cats.push(name)
 return cats
}
function destructivelyPrependCat(name) {
    cats.unshift(name)
    return cats
}
function destructivelyRemoveLastCat(name) {
    cats.pop(name)
    return cats
}
function destructivelyRemoveFirstCat(name) {
    cats.shift(name)
    return cats
}

function appendCat(name) {
const newArray = [...cats, name]
return newArray
}
function prependCat(name) {
    const newArray = [name, ...cats]
    return newArray
    }
function removeLastCat() {
    const newCats = cats.slice(0, -1)
    return newCats
}
function removeFirstCat() {
    const coolCats = cats.slice(1)
    return coolCats
}
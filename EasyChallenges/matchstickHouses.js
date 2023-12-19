function matchHouses(step) {

    return step !== 0 ? step * 6 - (step - 1) : 0;

}

console.log(matchHouses(1)); // -> 6
console.log(matchHouses(4)); // -> 21
console.log(matchHouses(87)); // -> 436
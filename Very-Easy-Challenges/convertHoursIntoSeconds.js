function howManySeconds(hours) {

    let seconds = (hours * 60) * 60;

    return seconds;
}

console.log(howManySeconds(2)); // -> 7200
howManySeconds(10); // -> 36000
howManySeconds(24); // -> 86400
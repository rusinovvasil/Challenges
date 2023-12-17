function divisibleByFive(n) {

    return n % 5 === 0 ? true : false;
}

divisibleByFive(5); // ➞ true

divisibleByFive(-55); // ➞ true

divisibleByFive(37); // ➞ false
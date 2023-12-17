function acceptIntoMovie(age, isSupervised) {

    if (age >= 15 || isSupervised === true) {
        console.log(true);
    } else {
        console.log(false);
    }
}

acceptIntoMovie(14, true); // ➞ true

acceptIntoMovie(14, false); // ➞ false

acceptIntoMovie(16, false); // ➞ true
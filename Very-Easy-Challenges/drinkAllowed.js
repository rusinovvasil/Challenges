function shouldServeDrinks(age, onBreak) {

    if (age >= 18 && onBreak === false) {
        console.log(true);
    } else {
        console.log(false);
    }
}

shouldServeDrinks(17, true); // ➞ false

shouldServeDrinks(19, false); // ➞ true

shouldServeDrinks(30, true); // ➞ false
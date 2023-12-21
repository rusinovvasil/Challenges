function timeForMilkAndCookies(date) {

    let christmasDate = new Date(date.getFullYear(), 11, 24);

    if (date.getDate() === christmasDate.getDate()) {
        return true;
    } else {
        return false;
    }

}

console.log(timeForMilkAndCookies(new Date(2013, 11, 24))); // ➞ true

console.log(timeForMilkAndCookies(new Date(2013, 0, 23))); // ➞ false

console.log(timeForMilkAndCookies(new Date(3000, 11, 24))); // ➞ true
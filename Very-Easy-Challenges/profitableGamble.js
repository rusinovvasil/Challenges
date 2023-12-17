function profitableGamble(prob, prize, pay) {

    // 1st Example

    // if (prob * prize > pay) {
    //     console.log(true);
    // } else {
    //     console.log(false);
    // }

    // 2nd Example

    return prob * prize > pay
        ? true
        : false;
}


profitableGamble(0.2, 50, 9); // ➞ true

profitableGamble(0.9, 1, 2); // ➞ false

profitableGamble(0.9, 3, 2); // ➞ true
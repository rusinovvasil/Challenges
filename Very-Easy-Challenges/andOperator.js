function and(a, b) {

    // if (a === false) {
    //     return false;
    // } else if (b === false) {
    //     return false;
    // } else {
    //     return true;
    // }


    if (a === false || b === false) {
        return false;
    } else {
        return true;
    }

}

and(true, false); // ➞ false

and(true, true); // ➞ true

and(false, true); // ➞ false

and(false, false); // ➞ false
function checkEquality(a, b) {

    // 1st example

    // if (a === b) {
    //     return true;
    // } else {
    //     return false;
    // }



    // 2nd example

    return a === b
        ? true
        : false;

}

checkEquality(1, true); // ➞ false
// A number and a boolean: the value and type are different.

checkEquality(0, "0"); // ➞ false
// A number and a string: the type is different.

checkEquality(1, 1); // ➞ true
// A number and a number: the type and value are equal.
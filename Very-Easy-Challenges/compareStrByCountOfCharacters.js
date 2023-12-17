function comp(str1, str2) {

    // if (str1.length === str2.length) {
    //     console.log(true);
    // } else {
    //     console.log(false);
    // }

    return str1.length === str2.length ? true : false
}

comp("AB", "CD"); // ➞ true

comp("ABC", "DE"); // ➞ false

comp("hello", "edabit"); // ➞ false
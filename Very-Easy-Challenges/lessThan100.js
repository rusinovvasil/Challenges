function lessThan100(a, b) {

    let sum = a + b;
    if (sum < 100) {
        return true;
    } else {
        return false;
    }

}
lessThan100(22, 15); // ➞ true
// 22 + 15 = 37

lessThan100(83, 34); // ➞ false
// 83 + 34 = 117

lessThan100(3, 77); // ➞ true
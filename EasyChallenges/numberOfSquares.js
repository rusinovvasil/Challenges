function numberSquares(n) {

    if (n === 0) {
        return n;
    } else {
        return n ** 2 + numberSquares(n - 1);
    }
}

console.log(numberSquares(2)); // ➞ 5

console.log(numberSquares(4)); // ➞ 30

console.log(numberSquares(5)); // ➞ 55
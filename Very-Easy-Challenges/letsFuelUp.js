function calculateFuel(n) {

    const result = n * 10;

    if (result >= 100) {
        console.log(result);
    } else {
        console.log(100);
    }

}

calculateFuel(15); // ➞ 150

calculateFuel(23.5); // ➞ 235

calculateFuel(3); // ➞ 100

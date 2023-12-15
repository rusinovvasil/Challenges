function printArray(arr) {

    let newArray = [];

    for (let i = 1; i <= arr; i++) {
        newArray.push(i);
    }
    console.log(newArray)

}

printArray(1); // ➞ [1]

printArray(3); // ➞ [1, 2, 3]

printArray(6); // ➞ [1, 2, 3, 4, 5, 6]
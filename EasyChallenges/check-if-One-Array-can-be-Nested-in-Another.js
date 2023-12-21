function canNest(arr1, arr2) {

    // Checking if all elements of `arr1` are unique in `arr2`
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            return false; // if we find a common element, we return false
        }
    }
    return true; // if we haven't found common elements, we return true.
}

console.log(canNest([1, 2, 3, 4], [0, 6]));   // ➞ true
console.log(canNest([3, 1], [4, 0]));           // ➞ true
console.log(canNest([9, 9, 8], [8, 9]));        // ➞ false
console.log(canNest([1, 2, 3, 4], [2, 3]));     // ➞ false
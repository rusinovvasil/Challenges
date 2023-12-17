function drop(arr, el = 1) {

    let newArr = arr.slice(el);
    console.log(newArr);
}
drop([1, 2, 3], 1); // ➞ [2, 3]
drop([1, 2, 3], 2); // ➞ [3]
drop([1, 2, 3], 5); // ➞ []
drop([1, 2, 3], 0); // ➞ [1, 2, 3]



console.log("--------------------");
console.log("---Arrow Function---");


const dropArrow = (arr, el = 1) => {
    console.log(arr.slice(el));
}
dropArrow([1, 2, 3], 1); // ➞ [2, 3]
dropArrow([1, 2, 3], 2); // ➞ [3]
dropArrow([1, 2, 3], 5); // ➞ []
dropArrow([1, 2, 3], 0); // ➞ [1, 2, 3]
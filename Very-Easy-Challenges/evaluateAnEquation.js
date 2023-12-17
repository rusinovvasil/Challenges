function eq(evaluate) {

    let result = eval(evaluate);
    console.log(result);

}
eq("1+2"); // ➞ 3

eq("6/(9-7)"); // ➞ 3

eq("3+2-4"); // ➞ 1



// Arrow Function

const eqArrow = (evaluate) => console.log(eval(evaluate));

eqArrow("1+2"); // ➞ 3

eqArrow("6/(9-7)"); // ➞ 3

eqArrow("3+2-4"); // ➞ 1
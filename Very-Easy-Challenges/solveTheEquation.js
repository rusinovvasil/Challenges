function equation(s) {

    console.log(eval(s));

}

equation("1+1"); // ➞ 2

equation("7*4-2"); // ➞ 26

equation("1+1+1+1+1"); // ➞ 5


console.log(`\n`);
console.log(`Arrow func...`);

const equationArrow = (s) => console.log(eval(s));

equationArrow("1+1"); // ➞ 2

equationArrow("7*4-2"); // ➞ 26

equationArrow("1+1+1+1+1"); // ➞ 5


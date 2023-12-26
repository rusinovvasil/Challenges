const REGEXP = /red flag|blue flag/g;

console.log("red flag blue flag".match(REGEXP)); // ➞ ["red flag", "blue flag"]
console.log("yellow flag red flag blue flag green flag".match(REGEXP)); // ➞ ["red flag", "blue flag"]
console.log("pink flag red flag black flag blue flag green flag red flag".match(REGEXP)); // ➞ ["red flag", "blue flag"]


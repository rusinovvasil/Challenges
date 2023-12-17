function concatName(firstName, lastName) {

    let concatStr = lastName.concat(', ', firstName)
    console.log(concatStr);
}

concatName("First", "Last"); // ➞ "Last, First"

concatName("John", "Doe"); // ➞ "Doe, John"

concatName("Mary", "Jane"); // ➞ "Jane, Mary"
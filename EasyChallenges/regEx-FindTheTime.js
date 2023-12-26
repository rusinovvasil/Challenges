function findTheTime() {
    let text = "Make a regexp to find time in the string: Breakfast at 09:00 in the room 123:456. In this task there’s no need to check time correctness yet, so 25:99 can also be a valid result. The regexp should not match 123:456.";

    let regExpression = /\b\d{1,2}:\d{2}\b/g;

    let times = text.match(regExpression);
    console.log(times);

}

findTheTime()
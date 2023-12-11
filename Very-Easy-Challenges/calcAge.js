function calcAge(age) {
    if (age > 0) {
        age = age * 365;
        return age;
    } else {
        return age;
    }
}

calcAge(65); // ➞ 23725

calcAge(0); // ➞ 0

calcAge(20); // ➞ 7300
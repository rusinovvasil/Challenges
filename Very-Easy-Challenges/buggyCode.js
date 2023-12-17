function has_bugs(buggyCode) {
    if (buggyCode) {
        console.log('sad days');
    } else {
        console.log("it's a good day");
    }
}


has_bugs(true); // ➞ "sad days"

has_bugs(false); // ➞ "it's a good day"
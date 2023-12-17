function convert(hours, minutes) {

    let seconds = (hours * 60) * 60 + (minutes * 60);
    console.log(seconds);
}

convert(1, 3); // -> 3780
convert(2, 0); // -> 7200  
convert(0, 0); // -> 0
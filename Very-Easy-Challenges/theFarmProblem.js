function animals(chickens, cows, pigs) {

    const chickenLegs = chickens * 2;
    const cowsLegs = cows * 4;
    const pigsLegs = pigs * 4;

    const result = chickenLegs + cowsLegs + pigsLegs;

    console.log(result);
}

animals(2, 3, 5); // -> 36
animals(1, 2, 3); // -> 22
animals(5, 2, 8); // -> 50
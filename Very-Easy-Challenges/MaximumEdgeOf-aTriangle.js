function nextEdge(side1, side2) {

    let thirdSide = (side1 + side2) - 1;

    return thirdSide;
}

nextEdge(8, 10); // -> 17
nextEdge(5, 7); // -> 11
nextEdge(9, 2); // -> 10
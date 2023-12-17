function footballPoints(wins, draws, losses) {

    const winsPoints = wins * 3;
    const drawsPoints = draws * 1;
    const lossesPoints = losses * 0;

    const totalPoints = winsPoints + drawsPoints + lossesPoints;

    return totalPoints;


}

footballPoints(3, 4, 2); // ➞ 13

footballPoints(5, 0, 2); // ➞ 15

footballPoints(0, 0, 1); // ➞ 0
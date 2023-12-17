
const frames = (minutes, fps) => { return minutes * fps * 60 };


frames(1, 1); // ➞ 60

frames(10, 1); // ➞ 600

frames(10, 25); // ➞ 15000
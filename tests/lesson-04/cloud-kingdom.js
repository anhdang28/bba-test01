//Cách 1
let playerName = "Mario";
let currentLives = 3;
const coinLevel1 = 25;
const coinLevel2 = 30;
const coinLevel3 = 45;

totalCoin = coinLevel1 + coinLevel2 + coinLevel3;
averageCoin = totalCoin / 3;
let coinLeft = totalCoin % 3;

console.log(`Số coin dư là: ${coinLeft}`);

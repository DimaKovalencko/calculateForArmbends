
export const getPricePlayer = (countPlayer: number) => {
    let pricePlayer = 0;

    if (countPlayer >= 15) {
        pricePlayer = 110;
    } else if (countPlayer >= 14) {
        pricePlayer = 120;
    } else if (countPlayer >= 12) {
        pricePlayer = 135;
    } else if (countPlayer >= 10) {
        pricePlayer = 150;
    } else if (countPlayer >= 9) {
        pricePlayer = 165;
    } else if (countPlayer >= 8) {
        pricePlayer = 180;
    } else if (countPlayer >= 5) {
        pricePlayer = 200;
    } else if (countPlayer >= 3) {
        pricePlayer = 230;
    } else if (countPlayer >= 2) {
        pricePlayer = 250;
    } else if (countPlayer >= 1) {
        pricePlayer = 500;
    }

    return pricePlayer;
}


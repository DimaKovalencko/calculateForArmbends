export const getPricePlayer = (countPlayer: number, isTheyCreate: boolean) => {
    let pricePlayer = 0;

    if (countPlayer >= 15) {
        pricePlayer = !isTheyCreate ? 80 : 50;
    } else if (countPlayer >= 14) {
        pricePlayer = !isTheyCreate ? 90 : 60;
    } else if (countPlayer >= 12) {
        pricePlayer = !isTheyCreate ? 100 : 70;
    } else if (countPlayer >= 10) {
        pricePlayer = !isTheyCreate ? 100 : 80;
    } else if (countPlayer >= 9) {
        pricePlayer = !isTheyCreate ? 120 : 90;
    } else if (countPlayer >= 8) {
        pricePlayer = !isTheyCreate ? 130 : 100;
    } else if (countPlayer >= 5) {
        pricePlayer = !isTheyCreate ? 150 : 110;
    } else if (countPlayer >= 3) {
        pricePlayer = !isTheyCreate ? 200 : 150;
    } else if (countPlayer >= 2) {
        pricePlayer = !isTheyCreate ? 250 : 150;
    } else if (countPlayer >= 1) {
        pricePlayer = !isTheyCreate ? 400 : 150;
    }

    return pricePlayer;
}


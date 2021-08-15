export function randomInt(max: number) {
    const min = 0;
    return Math.floor(Math.random() * (max - min) + min);
}

export function randomNumber(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

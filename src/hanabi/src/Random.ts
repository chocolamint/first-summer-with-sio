export function pickRandom<T>(arr: T[]) {
    const min = 0;
    const max = Math.floor(arr.length);
    const index = Math.floor(Math.random() * (max - min) + min);
    return arr[index];
}

export function randomNumber(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

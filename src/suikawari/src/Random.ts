export function randomInt(max: number): number;
export function randomInt(min: number, max: number): number;
export function randomInt(x: number, y?: number): number {
    let min: number, max: number;
    if (y === undefined) {
        min = 0;
        max = x;
    } else {
        min = x;
        max = y;
    }
    return Math.floor(Math.random() * (max - min) + min);
}

export function randomNumber(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

export function randomPick<T>(arr: T[]) {
    return arr[randomInt(arr.length)];
}
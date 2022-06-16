const randomBetween = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1) + min)

export const random = {
    int: (min: number, max: number) => randomBetween(min, max)
}
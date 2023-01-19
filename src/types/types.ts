type RGB = `rgb(${string})`;
type RGBA = `rgba(${string})`;
type HEX = `#${string}`;

type Color = RGB | RGBA | HEX;

export type SettingGames = {
    FPS: number,
    sizeGap: number,
    sizeField: number,
    sizeBoard: number,
    colorBoard: [Color, Color?],
    colorSnake: Color,
    colorFood: Color,
    borderBoard: boolean
}

export type Coordinates = {
    X: number,
    Y: number
}
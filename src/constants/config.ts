import { Coordinates, SettingGames } from "../types/types";

export const setGame: SettingGames = {
    FPS: 7, // Speed game
    sizeGap: 0, // Size gap
    sizeField: 40, // Size of a single field
    sizeBoard:  600, // Size of the entire board
    colorBoard: ["#1a53ff", "#1a03ff"], // Board color
    colorSnake: "#00ff00", // Snake color
    colorFood: "#ff0000", // Food color
    borderBoard: false // Going through walls
}

export let
    totalField: number = setGame.sizeField - setGame.sizeGap,
    totalGap: number = setGame.sizeGap / 2,
    allFields: number = setGame.sizeBoard / setGame.sizeField;

export let
    food: Coordinates = {
        X: 0,
        Y: 0
    },
    snake: Coordinates[] = [
    {
        X: 0,
        Y: 0
    }
];

// Setting the food position
export const setFood = (newFood: object) => {
    food = {...food, ...newFood}
}

// Refresh variables with new values
export const refreshTotalSizes = () => {
    totalField = setGame.sizeField - setGame.sizeGap;
    totalGap = setGame.sizeGap / 2;
    allFields = setGame.sizeBoard / setGame.sizeField;
}
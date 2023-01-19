import { Coordinates } from "../types/types";
import { allFields, setFood, setGame, snake, totalGap } from "../constants/config.js";
import { winGame } from "./menuGame.js";

// Randomize a random field
const randomField = ():number => {
    let randomField = (Math.floor(Math.random() * (allFields - 0 )) + 0) * setGame.sizeField + totalGap;

    return randomField;
};

// Randomize a random field snake head
export const getRandomSnake = () => {
    snake[0].X = randomField();
    snake[0].Y = randomField();
}

let searchField: number = 0;

// Randomize a random field food
export const getRandomFood = () => {
    let newfood: Coordinates = {
        X: randomField(),
        Y: randomField()
    }

    // Randomize when there is an empty field or win game
    while(snake.some((square) => square.X === newfood.X && square.Y === newfood.Y) ) {
        if(searchField > 1000) {
            searchField = 0;
            winGame();
            return;
        }
        newfood= {
            X: randomField(),
            Y: randomField()
        }
        searchField++;
    }

    return setFood(newfood);
}
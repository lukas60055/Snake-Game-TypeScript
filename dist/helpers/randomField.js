import { allFields, setFood, setGame, snake, totalGap } from "../constants/config.js";
import { winGame } from "./menuGame.js";
// Randomize a random field
var randomField = function () {
    var randomField = (Math.floor(Math.random() * (allFields - 0)) + 0) * setGame.sizeField + totalGap;
    return randomField;
};
// Randomize a random field snake head
export var getRandomSnake = function () {
    snake[0].X = randomField();
    snake[0].Y = randomField();
};
var searchField = 0;
// Randomize a random field food
export var getRandomFood = function () {
    var newfood = {
        X: randomField(),
        Y: randomField()
    };
    // Randomize when there is an empty field or win game
    while (snake.some(function (square) { return square.X === newfood.X && square.Y === newfood.Y; })) {
        if (searchField > 1000) {
            searchField = 0;
            winGame();
            return;
        }
        newfood = {
            X: randomField(),
            Y: randomField()
        };
        searchField++;
    }
    return setFood(newfood);
};

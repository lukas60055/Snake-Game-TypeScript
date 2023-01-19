import { food, refreshTotalSizes, setGame, snake, totalField } from "./constants/config.js";
import { borderBoard, renderBoard } from "./helpers/boardGame.js";
import { collisionSnake } from "./helpers/collisionSnake.js";
import { contollerGames, directionX, directionY } from "./helpers/controllerGames.js";
import { pause, end, playBtn, startGame, settingBtn } from "./helpers/menuGame.js";
import { settingGame } from "./helpers/menuSettingGame.js";
import { getRandomFood, getRandomSnake } from "./helpers/randomField.js";
import { addingPoint } from "./helpers/scoreGame.js";
export var canvas = document.querySelector("#canvas");
export var ctx = canvas.getContext("2d");
var lastTimestamp = 0;
playBtn.addEventListener("click", function () {
    startGame();
    refreshTotalSizes();
    getRandomSnake();
    getRandomFood();
    drawGame();
});
settingBtn.addEventListener("click", function () {
    settingGame();
});
export var drawGame = function (timestamp) {
    if (pause || end) {
        // Pause game
        return;
    }
    else {
        // Game animation
        requestAnimationFrame(drawGame);
        if (timestamp - lastTimestamp < 1000 / setGame.FPS)
            return;
        // Move snake body
        for (var i = snake.length - 1; i > 1; i--) {
            snake[i] = snake[i - 1];
        }
        if (snake.length > 1) {
            snake[1] = { X: snake[0].X, Y: snake[0].Y };
        }
        // Move snake head
        snake[0].X += directionX * setGame.sizeField;
        snake[0].Y += directionY * setGame.sizeField;
        // Check if the snake is off the board
        borderBoard();
        // Game board rendering
        renderBoard();
        // Check for collisions snake on body
        collisionSnake();
        // Check if the snake eats food and adding point
        if (snake[0].X === food.X && snake[0].Y === food.Y) {
            snake.push({ X: food.X, Y: food.Y });
            addingPoint();
            getRandomFood();
        }
        // Draw food
        ctx.fillStyle = setGame.colorFood;
        ctx.fillRect(food.X, food.Y, totalField, totalField);
        // Draw snake head
        ctx.fillStyle = setGame.colorSnake;
        ctx.fillRect(snake[0].X, snake[0].Y, totalField, totalField);
        // Draw snake body
        for (var i = 1; i < snake.length; i++) {
            ctx.fillRect(snake[i].X + 2.5, snake[i].Y + 2.5, totalField - 5, totalField - 5);
        }
        lastTimestamp = timestamp;
    }
};
document.addEventListener("keydown", function (event) {
    contollerGames(event);
});

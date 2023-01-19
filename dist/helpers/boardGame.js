import { canvas, ctx } from "../app.js";
import { setGame, snake, totalField, totalGap } from "../constants/config.js";
import { end, endGame } from "./menuGame.js";
var canvasWidth = setGame.sizeBoard;
var canvasHeight = setGame.sizeBoard;
// Update board size
export var resizeBoard = function () {
    canvasWidth = setGame.sizeBoard;
    canvasHeight = setGame.sizeBoard;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
};
// Render game board
export var renderBoard = function () {
    if (end)
        return;
    for (var i = 0; i < canvasHeight / setGame.sizeField; i++) {
        for (var j = 0; j < canvasWidth / setGame.sizeField; j++) {
            ctx.beginPath();
            ctx.fillStyle = setGame.colorBoard[(i + j) % 2];
            ctx.fillRect(j * setGame.sizeField + totalGap, i * setGame.sizeField + totalGap, totalField, totalField);
            ctx.closePath();
        }
    }
};
// Check if the snake is off the board
export var borderBoard = function () {
    if (setGame.borderBoard) {
        if (snake[0].X < 0 || snake[0].X >= canvasWidth) {
            endGame();
        }
        if (snake[0].Y < 0 || snake[0].Y >= canvasHeight) {
            endGame();
        }
        canvas.style.borderColor = 'red';
    }
    else {
        if (snake[0].X < 0) {
            snake[0].X = canvasWidth - (setGame.sizeField - totalGap);
        }
        else if (snake[0].X >= canvasWidth) {
            snake[0].X = 0 + totalGap;
        }
        if (snake[0].Y < 0) {
            snake[0].Y = canvasHeight - (setGame.sizeField - totalGap);
        }
        else if (snake[0].Y >= canvasHeight) {
            snake[0].Y = 0 + totalGap;
        }
        canvas.style.borderColor = 'white';
    }
};

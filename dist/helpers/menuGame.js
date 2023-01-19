import { drawGame } from "../app.js";
import { snake } from "../constants/config.js";
import { resizeBoard } from "./boardGame.js";
import { resetDirection } from "./controllerGames.js";
import { resetPoint } from "./scoreGame.js";
var soundLost = new Audio("dist/assets/sound/lost.mp3");
var soundWin = new Audio("dist/assets/sound/win.mp3");
export var containerMenu = document.querySelector(".containterMenu"), containerGame = document.querySelector(".containerGame"), menuStart = document.querySelector(".menuGame.start"), menuSetting = document.querySelector(".menuGame.setting"), menuStop = document.querySelector(".menuGame.stop"), stopText = document.querySelector(".stop > .menuGame-title"), playBtn = document.querySelector("#play"), settingBtn = document.querySelector("#setting"), saveBtn = document.querySelector("#save"), resumeBtn = document.querySelector("#resume"), exitBtn = document.querySelector("#exit");
export var pause = false, end = true;
// Start game
export var startGame = function () {
    end = false;
    containerMenu.style.display = 'none';
    menuStart.style.display = 'none';
    containerGame.style.display = 'block';
    resumeBtn.style.display = 'block';
    stopText.textContent = 'Pause Game';
    resizeBoard();
};
// Menu pause game
export var pauseGame = function () {
    if (!pause) {
        pause = true;
        containerMenu.style.display = 'block';
        menuStop.style.display = 'block';
    }
    else {
        pause = false;
        containerMenu.style.display = 'none';
        requestAnimationFrame(drawGame);
    }
};
// Menu end/lost game
export var endGame = function () {
    end = true;
    containerMenu.style.display = 'block';
    menuStop.style.display = 'block';
    resumeBtn.style.display = 'none';
    stopText.textContent = 'End Game';
    soundLost.play();
};
// Back to the start menu
export var exitGame = function () {
    end = true;
    pause = false;
    containerMenu.classList.remove('win');
    containerMenu.style.display = 'block';
    menuStart.style.display = 'block';
    menuSetting.style.display = 'none';
    menuStop.style.display = 'none';
    containerGame.style.display = 'none';
    while (snake.length > 1) {
        snake.pop();
    }
    resetPoint();
    resetDirection();
};
// Menu win game
export var winGame = function () {
    end = true;
    containerMenu.classList.add('win');
    containerMenu.style.display = 'block';
    menuStop.style.display = 'block';
    resumeBtn.style.display = 'none';
    stopText.textContent = 'Win Game!';
    soundWin.play();
};
resumeBtn.addEventListener("click", function () {
    pauseGame();
});
exitBtn.addEventListener("click", function () {
    exitGame();
});

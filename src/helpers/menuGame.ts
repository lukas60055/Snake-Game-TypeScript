import { drawGame } from "../app.js";
import { snake } from "../constants/config.js";
import { resizeBoard } from "./boardGame.js";
import { resetDirection } from "./controllerGames.js";
import { resetPoint } from "./scoreGame.js";

const soundLost: HTMLAudioElement = new Audio("dist/assets/sound/lost.mp3");
const soundWin: HTMLAudioElement = new Audio("dist/assets/sound/win.mp3");

export const
    containerMenu: HTMLDivElement = document.querySelector(".containterMenu"),
    containerGame: HTMLDivElement = document.querySelector(".containerGame"),

    menuStart: HTMLDivElement = document.querySelector(".menuGame.start"),
    menuSetting: HTMLDivElement = document.querySelector(".menuGame.setting"),
    menuStop: HTMLDivElement = document.querySelector(".menuGame.stop"),

    stopText: HTMLHeadingElement = document.querySelector(".stop > .menuGame-title"),

    playBtn: HTMLButtonElement = document.querySelector("#play"),
    settingBtn: HTMLButtonElement = document.querySelector("#setting"),
    saveBtn: HTMLButtonElement = document.querySelector("#save"),
    resumeBtn: HTMLButtonElement = document.querySelector("#resume"),
    exitBtn: HTMLButtonElement = document.querySelector("#exit");

export let
    pause: boolean = false,
    end: boolean = true;

// Start game
export const startGame = () => {
    end = false;
    containerMenu.style.display = 'none';
    menuStart.style.display = 'none';
    containerGame.style.display = 'block';
    resumeBtn.style.display = 'block';
    stopText.textContent = 'Pause Game';
    resizeBoard();
}

// Menu pause game
export const pauseGame = () => {
    if(!pause) {
        pause = true;
        containerMenu.style.display = 'block';
        menuStop.style.display = 'block';
    } else {
        pause = false;
        containerMenu.style.display = 'none';
        requestAnimationFrame(drawGame);
    }
}

// Menu end/lost game
export const endGame = () => {
    end = true;
    containerMenu.style.display = 'block';
    menuStop.style.display = 'block';
    resumeBtn.style.display = 'none';
    stopText.textContent = 'End Game';
    soundLost.play();
}

// Back to the start menu
export const exitGame = () => {
    end = true;
    pause = false;
    containerMenu.classList.remove('win');
    containerMenu.style.display = 'block';
    menuStart.style.display = 'block';
    menuSetting.style.display = 'none';
    menuStop.style.display = 'none';
    containerGame.style.display = 'none';
    while(snake.length > 1) {
        snake.pop();
    }
    resetPoint();
    resetDirection();
}

// Menu win game
export const winGame = () => {
    end = true;
    containerMenu.classList.add('win');
    containerMenu.style.display = 'block';
    menuStop.style.display = 'block';
    resumeBtn.style.display = 'none';
    stopText.textContent = 'Win Game!';
    soundWin.play();
}

resumeBtn.addEventListener("click", () => {
    pauseGame();
});

exitBtn.addEventListener("click", () => {
    exitGame();
});
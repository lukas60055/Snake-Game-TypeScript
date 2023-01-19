import { refreshTotalSizes, setGame } from "../constants/config.js";
import { resizeBoard } from "./boardGame.js";
import { exitGame, menuStart, saveBtn } from "./menuGame.js";

const menuSetting: HTMLDivElement = document.querySelector(".menuGame.setting");

const settingRange: NodeListOf<HTMLInputElement> = document.querySelectorAll(".menuGame-setting-range");
const settingRangeValue: NodeListOf<HTMLSpanElement> = document.querySelectorAll(".menuGame-setting-value");

const settingColor: NodeListOf<HTMLInputElement> = document.querySelectorAll(".menuGame-setting-color");

const settingBorder: HTMLInputElement = document.querySelector(".menuGame-setting-checkbox");

// Menu setting
export const settingGame = () => {
    menuStart.style.display = 'none';
    menuSetting.style.display = 'block';
}

// Setting input type="range"
settingRange.forEach( (element, index) => {
    element.addEventListener("input", () => {
        settingRangeValue[index].textContent = element.value;
        setGame[element.name] = parseInt(element.value);
    });

    settingRangeValue[index].textContent = element.value;
    setGame[element.name] = parseInt(element.value);
});

// Setting input type="color"
settingColor.forEach( (element, index) => {
    element.addEventListener("input", () => {
        if(setGame[element.name] instanceof Array) {
            setGame[element.name][index] = element.value;
        } else {
            setGame[element.name] = element.value;
        }
    });

    if(setGame[element.name] instanceof Array) {
        setGame[element.name][index] = element.value;
    } else {
        setGame[element.name] = element.value;
    }
});

// Setting input type="checkbox"
settingBorder.addEventListener("input", () => {
    setGame[settingBorder.name] = settingBorder.checked;
});

// Checks whether the size of the fields will fit in the board
const checkSize = () => {
    while(setGame.sizeBoard % setGame.sizeField !== 0) {
        setGame.sizeField++;
    }
}

saveBtn.addEventListener("click", () => {
    checkSize();
    resizeBoard();
    refreshTotalSizes();
    exitGame();
});
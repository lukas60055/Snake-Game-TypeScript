import { refreshTotalSizes, setGame } from "../constants/config.js";
import { resizeBoard } from "./boardGame.js";
import { exitGame, menuStart, saveBtn } from "./menuGame.js";
var menuSetting = document.querySelector(".menuGame.setting");
var settingRange = document.querySelectorAll(".menuGame-setting-range");
var settingRangeValue = document.querySelectorAll(".menuGame-setting-value");
var settingColor = document.querySelectorAll(".menuGame-setting-color");
var settingBorder = document.querySelector(".menuGame-setting-checkbox");
// Menu setting
export var settingGame = function () {
    menuStart.style.display = 'none';
    menuSetting.style.display = 'block';
};
// Setting input type="range"
settingRange.forEach(function (element, index) {
    element.addEventListener("input", function () {
        settingRangeValue[index].textContent = element.value;
        setGame[element.name] = parseInt(element.value);
    });
    settingRangeValue[index].textContent = element.value;
    setGame[element.name] = parseInt(element.value);
});
// Setting input type="color"
settingColor.forEach(function (element, index) {
    element.addEventListener("input", function () {
        if (setGame[element.name] instanceof Array) {
            setGame[element.name][index] = element.value;
        }
        else {
            setGame[element.name] = element.value;
        }
    });
    if (setGame[element.name] instanceof Array) {
        setGame[element.name][index] = element.value;
    }
    else {
        setGame[element.name] = element.value;
    }
});
// Setting input type="checkbox"
settingBorder.addEventListener("input", function () {
    setGame[settingBorder.name] = settingBorder.checked;
});
// Checks whether the size of the fields will fit in the board
var checkSize = function () {
    while (setGame.sizeBoard % setGame.sizeField !== 0) {
        setGame.sizeField++;
    }
};
saveBtn.addEventListener("click", function () {
    checkSize();
    resizeBoard();
    refreshTotalSizes();
    exitGame();
});

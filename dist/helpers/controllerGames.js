import { setGame } from "../constants/config.js";
import { end, pauseGame } from "./menuGame.js";
export var directionX = 0;
export var directionY = 0;
var rateLimit;
// Control the snake
export var contollerGames = function (event) {
    if (!rateLimit) {
        var key = event.key;
        switch (key) {
            case ('w'):
            case ('ArrowUp'):
                if (directionY === 0) {
                    directionX = 0;
                    directionY = -1;
                }
                break;
            case ('s'):
            case ('ArrowDown'):
                if (directionY === 0) {
                    directionX = 0;
                    directionY = 1;
                }
                break;
            case ('a'):
            case ('ArrowLeft'):
                if (directionX === 0) {
                    directionX = -1;
                    directionY = 0;
                }
                break;
            case ('d'):
            case ('ArrowRight'):
                if (directionX === 0) {
                    directionX = 1;
                    directionY = 0;
                }
                break;
            case ('Escape'):
                !end ? pauseGame() : null;
                break;
        }
        // Prevent pressing two buttons at once
        rateLimit = 1;
        setTimeout(function () {
            rateLimit = null;
        }, 1000 / (setGame.FPS + 1));
    }
};
// Reset direction
export var resetDirection = function () {
    directionX = 0;
    directionY = 0;
};

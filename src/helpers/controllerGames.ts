import { setGame } from "../constants/config.js";
import { end, pauseGame } from "./menuGame.js";

export let directionX: number = 0;
export let directionY: number = 0;

let rateLimit: (null | number);

// Control the snake
export const contollerGames = (event: KeyboardEvent) => {
    if(!rateLimit) {
        let key: string = event.key;

        switch(key) {
            case('w'):
            case('ArrowUp'):
                if(directionY === 0) {
                    directionX = 0;
                    directionY = -1;
                }
            break;

            case('s'):
            case('ArrowDown'):
                if(directionY === 0) {
                    directionX = 0;
                    directionY = 1;
                }
            break;

            case('a'):
            case('ArrowLeft'):
                if(directionX === 0) {
                    directionX = -1;
                    directionY = 0;
                }
            break;

            case('d'):
            case('ArrowRight'):
                if(directionX === 0) {
                    directionX = 1;
                    directionY = 0;
                }
            break;

            case('Escape'):
                !end ? pauseGame() : null;
            break;
        }

        // Prevent pressing two buttons at once
        rateLimit = 1;

        setTimeout( () => {
            rateLimit = null;
        }, 1000 / (setGame.FPS + 1))
    }
}

// Reset direction
export const resetDirection = () => {
    directionX = 0;
    directionY = 0;
}
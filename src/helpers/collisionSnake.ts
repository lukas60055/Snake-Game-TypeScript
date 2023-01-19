import { snake } from "../constants/config.js";
import { endGame } from "./menuGame.js";

// Check for collisions snake on body
export const collisionSnake = () => {
    for(let i = 1; i < snake.length; i++) {
        if(snake[0].X == snake[i].X && snake[0].Y == snake[i].Y) {
            endGame();
        }
    }
}
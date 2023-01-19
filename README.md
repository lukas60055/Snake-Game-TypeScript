# Snake Game - TypeScript

Hello World TypeScript!

The famous snake game. It was created using JavaScript/TypeScript. The game has been improved with menu and settings. To start the game just press the "Play!" and any snake control button. After getting 'food' we get a point and our snake gets bigger. If the 'Border board' option is turned off in the settings, you can walk through walls. Otherwise we will lose the game. We will also lose when the snake's head hits our body/tail. To win the game, all you have to do is fill in all the fields. *This is my first TypeScript project.*

<p align="center">
  <img src="https://i.imgur.com/ftbgSCf.png"/>
</p>

## Game Controls
- Control snake:
   - **W / ArrowUp** -> Up
   - **A / ArrowLeft** -> Left
   - **S / ArrowDown** -> Down
   - **D / ArrowRight** -> Right
- **ESC** -> Pause the game. Only works when the game starts.

## Setting Game
The following values can be changed in the menu:
- **Speed** -> The speed of the snake.
- **Gap size** -> Spacing between fields (squares).
- **Field size** -> Size in pixels of the field (square).
- **Board size** -> Size in pixels of the entire field (board).
- **Color board** -> Board color. Two colors like in a checkerboard.
- **Color snake** -> The color of the snake and its whole body.
- **Color food** -> The color of the food.
- **Border board** -> Enables or disables boundaries (walls). If the option is off, you can walk through walls.

## Technologies Used
- HTML
- CSS/SCSS
- JavaScript/TypeScript

## Installation and Run
#### 1. Clone the repo
   ```sh
   git clone https://github.com/lukas60055/Snake-Game-TypeScript
   ```
#### 2. Install NPM packages
   ```sh
   npm install
   ```
#### 3. Build application
   ```sh
   npm run build
   ```
   or
   ```sh
   npm run prod
   ```
#### 4. Run server/game
   ```sh
   npm run server
   ```
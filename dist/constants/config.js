var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
export var setGame = {
    FPS: 7,
    sizeGap: 0,
    sizeField: 40,
    sizeBoard: 600,
    colorBoard: ["#1a53ff", "#1a03ff"],
    colorSnake: "#00ff00",
    colorFood: "#ff0000",
    borderBoard: false // Going through walls
};
export var totalField = setGame.sizeField - setGame.sizeGap, totalGap = setGame.sizeGap / 2, allFields = setGame.sizeBoard / setGame.sizeField;
export var food = {
    X: 0,
    Y: 0
}, snake = [
    {
        X: 0,
        Y: 0
    }
];
// Setting the food position
export var setFood = function (newFood) {
    food = __assign(__assign({}, food), newFood);
};
// Refresh variables with new values
export var refreshTotalSizes = function () {
    totalField = setGame.sizeField - setGame.sizeGap;
    totalGap = setGame.sizeGap / 2;
    allFields = setGame.sizeBoard / setGame.sizeField;
};

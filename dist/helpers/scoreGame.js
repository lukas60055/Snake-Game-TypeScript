var soundPoint = new Audio("dist/assets/sound/point.wav");
var score = document.querySelectorAll(".point");
var point = 0;
// Adding point
export var addingPoint = function () {
    point += 1;
    score[0].textContent = String(point);
    score[1].textContent = String(point);
    soundPoint.play();
};
// Reset point
export var resetPoint = function () {
    point = 0;
    score[0].textContent = String(point);
    score[1].textContent = String(point);
};

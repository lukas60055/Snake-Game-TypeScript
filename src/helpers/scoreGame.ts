const soundPoint: HTMLAudioElement = new Audio("dist/assets/sound/point.wav");
const score: NodeListOf<HTMLSpanElement> = document.querySelectorAll(".point");

let point: number = 0;

// Adding point
export const addingPoint = () => {
    point += 1;
    score[0].textContent = String(point);
    score[1].textContent = String(point);
    soundPoint.play();
}

// Reset point
export const resetPoint = () => {
    point = 0;
    score[0].textContent = String(point);
    score[1].textContent = String(point);
}
const video = document.getElementById("film");
const left = document.querySelector(".border-left");
const right = document.querySelector(".border-right");

const events = [
    { start: 2, end: 5, side: "left", color: "purple" },
    { start: 6, end: 9, side: "left", color: "dodgerblue" },
    { start: 10, end: 13, side: "none" },
    { start: 14, end: 17, side: "right", color: "crimson" },
    { start: 18, end: 21, side: "left", color: "darkred" },
    { start: 22, end: 24, side: "left", color: "orange" },
    { start: 25, end: 28, side: "both", color: "red", vibration: [200,50,200] }
];

video.addEventListener("timeupdate", () => {
const t = video.currentTime;

left.style.background = "transparent";
right.style.background = "transparent";

events.forEach(e => {
    if (t >= e.start && t <= e.end) {
        if (e.side === "left" || e.side === "both") {
        left.style.background = e.color;
        left.classList.add("active");
    }

    if (e.side === "right" || e.side === "both") {
        right.style.background = e.color;
        right.classList.add("active");
    }

    if (e.vibration && navigator.vibrate) {
        navigator.vibrate(e.vibration);
    }
    }
    });
});
const video = document.getElementById("film");
const left = document.querySelector(".border-left");
const right = document.querySelector(".border-right");
const startBtn = document.getElementById("start"); 

startBtn.addEventListener("click", () => {
  video.play();

  startBtn.style.display = "none";

  const events = [
      { start: 1, end: 5, side: "left", color: "purple" },
      { start: 5, end: 6, side: "left", color: "red" , vibration: [200,50,200] },
      { start: 6, end: 8, side: "left", color: "darkred" },
      { start: 8, end: 21, side: "both", color: "grey" },
      { start: 21, end: 37, side: "left", color: "purple" },
      { start: 29, end: 33, side: "right", color: "green", vibration: [200,50,200] },
      { start: 32, end: 33, side: "left", color: "blue", vibration: [200,50,200] },
      { start: 34, end: 35, side: "right", color: "green", vibration: [200,50,200] },
      { start: 34, end: 37, side: "left", color: "blue", vibration: [200,50,200] },
      { start: 37, end: 39, side: "right", color: "green", vibration: [200,50,200] },
      { start: 39, end: 40, side: "both", color: "red", vibration: [200,50,200] },



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
});
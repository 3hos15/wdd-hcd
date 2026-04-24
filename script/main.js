const video = document.getElementById("film");
const border = document.querySelector("#border");

function updateDisplay() {
  const currentSecond = Math.floor(video.currentTime);
  border.className = "second-" + currentSecond;

  if (!video.ended) {
    setTimeout(updateDisplay, 100);
  }
}

video.addEventListener("play", updateDisplay);

function triggerShake() {
    const wrapper = document.querySelector('.video-wrapper');
    wrapper.classList.add('shaking');
    wrapper.addEventListener('animationend', () => {
        wrapper.classList.remove('shaking');
    }, { once: true });
}

function updateDisplay() {
    const currentSecond = Math.floor(video.currentTime);
    border.className = "second-" + currentSecond;

    if (currentSecond === 5 || currentSecond === 39 || currentSecond === 41) triggerShake();

    if (!video.ended) {
        setTimeout(updateDisplay, 100);
    }
}
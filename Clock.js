import { showGameOverPopup } from "./ModalForGameOver.js";
export function startCountdown(duration) {
  let remainingTime = duration;
  const clockElement = document.getElementById("clock");

  const timer = setInterval(() => {
    clockElement.textContent = remainingTime + "초 ";

    remainingTime -= 1;

    if (remainingTime < 0) {
      clearInterval(timer);
      clockElement.textContent = "0";
      showGameOverPopup();
    }
  }, 1000);
}

startCountdown(60); // 60초에서 시작하는 카운트다운

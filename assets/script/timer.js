const time = 60;

function startTimer(durationInSeconds) {
  let timer = durationInSeconds;
  intervalId = setInterval(function () {
    // display.textContent = timer;
    document.documentElement.style.setProperty(
      "--timer-minutes-seconds",
      "'" + timer + "'"
    );
    if (timer <= 0) {
      clearInterval(intervalId);
    }
    if (timer === 0) {
      answererdQuestionTimer();
      clearInterval(intervalId);
      startTimer(time);
    }

    let percentuale = (timer / time) * 100;
    console.log("percentuale", percentuale);
    console.log("timer", timer);

    document.documentElement.style.setProperty(
      "--outer_percent_deg",
      100 - percentuale + "%"
    );

    timer--;
  }, 1000); // 1000 millisecondi (1 secondo)
}

function resetTimer() {
  clearInterval(intervalId);
}

document.documentElement.style.setProperty(
  "--timer-minutes-seconds",
  "'" + time + "'"
);

startTimer(time - 1);

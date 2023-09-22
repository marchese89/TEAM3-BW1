const time = 60;

function startTimer(durationInSeconds) {
  let timer = durationInSeconds;
  intervalId = setInterval(function () {
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

    document.documentElement.style.setProperty(
      "--outer_percent_deg",
      100 - percentuale + "%"
    );

    timer--;
  }, 1000);
}

function resetTimer() {
  clearInterval(intervalId);
}

document.documentElement.style.setProperty(
  "--timer-minutes-seconds",
  "'" + time + "'"
);

startTimer(time - 1);

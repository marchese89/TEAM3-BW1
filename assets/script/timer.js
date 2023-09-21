const time = 60;

function startTimer(durationInSeconds, display) {
  let timer = durationInSeconds;

  const intervalId = setInterval(function () {
    display.textContent = timer;

    if (timer <= 0) {
      clearInterval(intervalId);
    }
    if (timer === 0) {
      answererdQuestionTimer();
      startTimer(time, display);
    }
    timer--;
    const circle=document.getElementsByClassName("timer2")[0]
    let percentuale=(timer/durationInSeconds)*100
    circle.style.strokeDasharray = `${(324*percentuale)/100},500`;

  }, 1000);// 1000 millisecondi (1 secondo)
  
}

function resetTimer() {
  clearInterval(intervalId);
}

const timer = document.getElementsByClassName("tempo")[0];

startTimer(time, timer);


// const percetualeTimer=(startTimer*100)/60


function startTimer(durationInSeconds,display) {
    let timer = durationInSeconds;

    const intervalId = setInterval(function () {
        // console.log(timer);
        display.textContent = timer;

        if (timer <= 0) {
            clearInterval(intervalId);
            
            
        }
       

        timer--;
    }, 1000); // 1000 millisecondi (1 secondo)
}

const timerElements = document.querySelectorAll('.tempo');

timerElements.forEach(function (element) {
    startTimer(70, element); // Imposta il tempo iniziale in secondi qui
});


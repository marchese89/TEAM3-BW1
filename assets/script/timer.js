function startTimer(durationInSeconds) {
    let timer = durationInSeconds;

    const intervalId = setInterval(function () {
        console.log(timer);

        if (timer <= 0) {
            clearInterval(intervalId);
            
            
        }
       

        timer--;
    }, 1000); // 1000 millisecondi (1 secondo)
}

startTimer(70);
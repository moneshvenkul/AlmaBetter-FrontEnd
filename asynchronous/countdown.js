function startCountdown(seconds){
    let remaining = seconds;
    const intervalId = setInterval(() => {
        console.log(remaining);
        remaining--;
        if (remaining < 0) {
            clearInterval(intervalId);
            console.log("Countdown finished!");
        }
    }, 1000);
}

startCountdown(5);
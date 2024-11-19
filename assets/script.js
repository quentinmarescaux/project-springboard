function timerFunction() {
    const timerElement = document.getElementById("timerValue");
    var timerValue = parseInt(timerElement.textContent, 10);
    
    timerValue--;
    timerElement.textContent = timerValue;

    if (timerValue === 0) {
        document.getElementById("timerValue").style.display = "none";
        document.getElementById("timerDone").style.display = "block";
        document.getElementById("stopTimerButton").style.display = "block";
    }
}

function startTimer() {
    const timerValue = parseInt(document.getElementById("timerValue").textContent, 10);

    const intervalId = setInterval(timerFunction, 1000);

    setTimeout(() => {
        clearInterval(intervalId);
    }, timerValue * 1000)

    document.getElementById("startTimerButton").style.display = "none";
}

function stopTimer() {
    document.getElementById("timerValue").textContent = 5;
    document.getElementById("stopTimerButton").style.display = "none";
    document.getElementById("timerDone").style.display = "none";
    document.getElementById("startTimerButton").style.display = "block";
    document.getElementById("timerValue").style.display = "block";
}
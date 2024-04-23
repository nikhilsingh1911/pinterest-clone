const displayTime = document.querySelector(".time");
let [seconds, minutes, hours] = [0, 0, 0];
let timer = null;

const stopWatch = () => {
    seconds++;
    console.log(seconds);
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    displayTime.innerHTML = h + ":" + m + ":" + s;
}

const start = () => {
    if (timer != null) {
        clearInterval(timer);
    }
    timer = setInterval(() => {
        stopWatch();
    }, 1000);
}


const watchStop = ()=>{
    console.log("Stop watch clicked")
    clearInterval(timer);
}

const resetbtn = ()=>{
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    displayTime.innerHTML = "00:00:00";
}
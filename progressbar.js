const buttonStartStop = document.getElementById('startDayCode');
const progressToday = document.getElementById('progressToday');

let stopWatch = false;
let width = 0;
const changeProgress = (progress) => {
  if (progress < 101) {
    progressToday.style.width = `${progress}%`;

  } else {
    stop()
  }
};

buttonStartStop.addEventListener('click', function () {
    stopWatch === false ? start() : stop();
    console.log(stopWatch)
})

function start() {
    stopWatch = true
    buttonStartStop.classList.replace('btn-outline-success', 'btn-outline-danger')
    buttonStartStop.innerText = "stop day code"
    progressWidth(stopWatch)
    
}

function stop() {
    stopWatch = false
    buttonStartStop.classList.replace('btn-outline-danger' ,'btn-outline-success')
    buttonStartStop.innerText = "start day code"
    progressWidth(stopWatch)
    
}

function progressWidth(stopWatch) {  
  if (stopWatch === true) {
    // width++
    // setInterval(timerProgress, 10)
    
  } else {
    // clearInterval()
  }
  
}


function timerProgress() {
  width++
  changeProgress(width)

}
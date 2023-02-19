const buttonStartStop = document.getElementById('startDayCode');
const progressToday = document.getElementById('progressToday');

let stopWatch = false;
let width = 0;
const changeProgress = (progress) => {
  progressToday.style.width = `${progress}%`;
};

buttonStartStop.addEventListener('click', function () {
    stopWatch === false ? start() : stop();
    console.log(stopWatch)
})

function start() {
    stopWatch = true
    buttonStartStop.classList.replace('btn-outline-success', 'btn-outline-danger')
    buttonStartStop.innerText = "stop day code"
    // progressWidth()
    
}

function stop() {
    stopWatch = false
    buttonStartStop.classList.replace('btn-outline-danger' ,'btn-outline-success')
    buttonStartStop.innerText = "start day code"
    // console.log(width)
    
}

function progressWidth() {
  let cron = setInterval(() => { timer(); }, 100); // para fazer em minutos
  function timer() {
    width++
    if (width === 100) {
        clearInterval(cron)
        stop()
    } else {
        changeProgress(width)
    }
  }
    
}


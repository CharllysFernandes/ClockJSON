const buttonStartStop = document.getElementById('startDayCode');
const progressbar = document.querySelector(".progress");
let stopWatch = false;

const changeProgress = (progress) => {
  progressbar.style.width = `${progress}%`;
};

buttonStartStop.addEventListener('click', function () {
    stopWatch === false ? start() : stop();

    function start() {
        stopWatch = true
        // buttonStartStop.classList.add('btn-outline-success')
        buttonStartStop.classList.replace('btn-outline-success', 'btn-outline-danger')
        buttonStartStop.innerText = "stop day code"

    }
    function stop() {
        stopWatch = false
        buttonStartStop.classList.replace('btn-outline-danger' ,'btn-outline-success')
        buttonStartStop.innerText = "start day code"
        inver
    }
    console.log(stopWatch)

})
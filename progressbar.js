const buttonStartStop = document.getElementById('startDayCode');
// const progressbar = document.querySelector(".progress");
const progressToday = document.getElementById('progressToday');
let stopWatch = false;

const changeProgress = (progress) => {
  progressToday.style.width = `${progress}%`;
};

buttonStartStop.addEventListener('click', function () {
    stopWatch === false ? start() : stop();
    
    var interval
    function start() {
        changeProgress(0)
        stopWatch = true
        buttonStartStop.classList.replace('btn-outline-success', 'btn-outline-danger')
        buttonStartStop.innerText = "stop day code"

        interval = setInterval(TimerHandle, 1000 ) // 3600000 ms = 1 hour / 100 units = 36000
        var width = 0
        
        function TimerHandle() {
            width++
            if (width === 100) {
                clearInterval(interval)
                stop()
                // TO-DO add color bg-sucess into progress bar.

            } else {
            changeProgress(width)
            }
        }
    }

    function stop() {
        stopWatch = false
        buttonStartStop.classList.replace('btn-outline-danger' ,'btn-outline-success')
        buttonStartStop.innerText = "start day code"
        clearInterval(interval)
    }
    console.log(stopWatch)

})

// TODO create function to TimerHandle...


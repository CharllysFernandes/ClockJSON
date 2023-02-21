const buttonStartStop = document.getElementById('startDayCode');
const progressToday = document.getElementById('progressToday');

// progressToday.style.width = `${progress}%`;

let stopWatch = false;
let width = 0;

buttonStartStop.addEventListener('click', function () {
    stopWatch ? stop() : start();
    console.log(stopWatch)
})

var incremento = () => width++

function start() {
    stopWatch = true
    buttonStartStop.classList.replace('btn-outline-success', 'btn-outline-danger')
    buttonStartStop.innerText = "stop day code"
    
    setTimeout(() => {
      console.log('incremento');
      incremento()
    }, 100);
}


function stop() {
    stopWatch = false
    buttonStartStop.classList.replace('btn-outline-danger' ,'btn-outline-success')
    buttonStartStop.innerText = "start day code"
    
}





// faça o incremento ++ x milesegundos
// adicione esse incremento ao width até chegar em 100%
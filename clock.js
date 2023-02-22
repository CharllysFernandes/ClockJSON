const timeClock = document.getElementById('timeClock')
const dates = document.getElementById('dates')
    
function fullDates() {
    const date = new Date();
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const fullDate = date.toLocaleDateString('pt-BR', options);

    dates.innerText = fullDate;
}

function timer() {
    var date = new Date();
    var hours = date.getHours()
    var minutes = date.getMinutes()
    var seconds = date.getSeconds();

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    let time = `${hours}:${minutes}:${seconds}`

    timeClock.innerText = time;
}

setInterval(timer, 1000);

timer();
fullDates();
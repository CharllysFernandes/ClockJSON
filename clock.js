const timeClock = document.getElementById('timeClock')
const dates = document.getElementById('dates')

function timer() {
    var date = new Date();

    var hours = date.getHours()
    var minutes = date.getMinutes()
    var seconds = date.getSeconds();

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    let time = `${hours}:${minutes}:${seconds}`

    var month = date.getMonth() + 1;
    var day = date.getDate();
    var year = date.getFullYear();
    let fullDate = `${day}-${month}-${year}`
    
    setInterval(timer, 1000)
    
    timeClock.innerText = time;
    dates.innerText = fullDate;
}
timer();
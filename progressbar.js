// JS
const startStopButton = document.getElementById('startDayCode');
const progressToday = document.getElementById('progressToday');

const PROGRESS_INTERVAL = 36000; // intervalo em milissegundos para 1 hora
const MAX_PROGRESS = 100; // valor máximo da barra de progresso

let progressWidth = 0; // largura atual da barra de progresso
let progressIntervalId = null; // id do setInterval para controlar a barra de progresso
let progressStatus = 'paused'; // status atual da barra de progresso

startStopButton.addEventListener('click', function () {
  startStop();
});

function startStop() {
  if (progressStatus === 'paused') {
    start();
    progressStatus = 'running';
    progressIntervalId = setInterval(updateProgress, PROGRESS_INTERVAL);
  } else if (progressStatus === 'running') {
    pause();
    progressStatus = 'paused';
    clearInterval(progressIntervalId);
  } else if (progressStatus === 'stopped') {
    restart();
    progressStatus = 'running';
    progressIntervalId = setInterval(updateProgress, PROGRESS_INTERVAL);
  }
}

function start() {
  startStopButton.classList.replace('btn-outline-success', 'btn-outline-danger');
  startStopButton.innerText = 'Stop day code';
}

function pause() {
  startStopButton.classList.replace('btn-outline-danger', 'btn-outline-success');
  startStopButton.innerText = 'Start day code';
}

function restart() {
  progressWidth = 0;
  progressToday.style.width = '0%';
}

function updateProgress() {
  if (progressWidth < MAX_PROGRESS) {
    progressWidth++;
    progressToday.style.width = progressWidth + '%';
  } else {
    clearInterval(progressIntervalId);
    progressStatus = 'stopped';
    pause();
  }
}

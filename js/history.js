const history = document.getElementById('history');
const modal_history = document.getElementById('history-modal');
history.addEventListener('click', function () {
    modal_history.classList.toggle('hidden');
})
const history_close = document.getElementById('history-close');
history_close.addEventListener('click', function () {
    modal_history.classList.toggle('hidden');
})
const history_background = document.getElementById('history-background');
history_background.addEventListener('click', function () {
    modal_history.classList.toggle('hidden');
})
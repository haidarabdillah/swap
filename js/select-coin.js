const select_coin = document.getElementById('select-coin');
const modal_select_coin = document.getElementById('select-coin-modal');
select_coin.addEventListener('click', function () {
    modal_select_coin.classList.toggle('hidden');
})
const select_coin_close = document.getElementById('select-coin-close');
select_coin_close.addEventListener('click', function () {
    modal_select_coin.classList.toggle('hidden');
})
const select_coin_background = document.getElementById('select-coin-background');
select_coin_background.addEventListener('click', function () {
    modal_select_coin.classList.toggle('hidden');
})

const select_token = document.getElementById('select-token');
const modal_select_token = document.getElementById('select-token-modal');
select_token.addEventListener('click', function () {
    modal_select_token.classList.toggle('hidden');
})
const select_token_close = document.getElementById('select-token-close');
select_token_close.addEventListener('click', function () {
    modal_select_token.classList.toggle('hidden');
})
const select_token_background = document.getElementById('select-token-background');
select_token_background.addEventListener('click', function () {
    modal_select_token.classList.toggle('hidden');
})

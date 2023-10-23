// const connect_wallet = document.getElementById('menu-wallet');
// var modal = document.getElementById('modal-wallet');
// connect_wallet.addEventListener('click', function () {
//     modal.classList.toggle('hidden');
// })
// const connect_wallet_close = document.getElementById('wallet-close');
// connect_wallet_close.addEventListener('click', function () {
//     modal.classList.toggle('hidden');
// })
// const connect_wallet_background = document.getElementById('wallet-background');
// connect_wallet_background.addEventListener('click', function () {
//     modal.classList.toggle('hidden');
// })

const wallet = document.querySelectorAll('.menu-wallet');
wallet.forEach(function(el) {
    el.addEventListener('click', function () {
        actionModal(document.getElementById('modal-wallet'));
    })
})

const wallet_close = document.getElementById('wallet-close');
wallet_close.addEventListener('click', function () {
    actionModal(document.getElementById('modal-wallet'));
})
const wallet_background = document.getElementById('wallet-background');
wallet_background.addEventListener('click', function () {
    actionModal(document.getElementById('modal-wallet'));
})

function actionModal(list) {
    list.classList.toggle('hidden');
}
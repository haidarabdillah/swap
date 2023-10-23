const wallet = document.querySelectorAll('.menu-wallet');
const modal = document.getElementById('modal-wallet');
wallet.forEach(function(el) {
    el.addEventListener('click', function () {
        openModal();
    })
})

const wallet_close = document.getElementById('wallet-close');
wallet_close.addEventListener('click', function () {
    closeModal();
})

const wallet_background = document.getElementById('wallet-background');
wallet_background.addEventListener('click', function () {
    closeModal();
})

function openModal() {
    modal.style.display = 'block';
  }
  
  // Function to close the modal
  function closeModal() {
    modal.style.display = 'none';
  }
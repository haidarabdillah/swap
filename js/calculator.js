const calculator = document.getElementById('calculator');
const modal_calculator = document.getElementById('calculator-modal');
calculator.addEventListener('click', function () {
    modal_calculator.classList.toggle('hidden');

})
const calculator_close = document.getElementById('calculator-close');
calculator_close.addEventListener('click', function () {
    modal_calculator.classList.toggle('hidden');
})
const calculator_background = document.getElementById('calculator-background');
calculator_background.addEventListener('click', function () {
    modal_calculator.classList.toggle('hidden');
})
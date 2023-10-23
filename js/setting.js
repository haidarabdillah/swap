const settings = document.getElementById('settings');
const modal_settings = document.getElementById('settings-modal');
settings.addEventListener('click', function () {
    modal_settings.classList.toggle('hidden');

})
const settings_close = document.getElementById('settings-close');
settings_close.addEventListener('click', function () {
    modal_settings.classList.toggle('hidden');
})
const settings_background = document.getElementById('settings-background');
settings_background.addEventListener('click', function () {
    modal_settings.classList.toggle('hidden');
})
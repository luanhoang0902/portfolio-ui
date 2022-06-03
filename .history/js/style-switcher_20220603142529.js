/* ====== toggle style switcher ===== */
const styleSwitcherToggle = document.querySelector('.style-switcher-toggler');
console.log(styleSwitcherToggle)
styleSwitcherToggle.addEventListener('click', () => {
    console.log(styleSwitcherToggle)
    document.querySelector('.style-switcher').classList.toggle('open');
})
/* ====== toggle style switcher ===== */
const styleSwitcherToggle = document.querySelector('.style-switcher-toggler');
console.log(styleSwitcherToggle)
styleSwitcherToggle.addEventListener('click', () => {
    console.log(styleSwitcherToggle)
    document.querySelector('.style-switcher').classList.toggle('open');
})
// hide style switcher on scroll
window.addEventListener("scroll", () => {
    if(document.querySelector('.style-switcher').classList.contains("open"))
    {
        document.querySelector('.style-switcher').classList.remove('open');
    }
})
/* =================== typing animation ====================*/
var typed = new Typed(".typing",{
    strings:["","Front-end Developer", "Programming lover"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})
/* Menu */
const menuControl = document.querySelector('.nav');
const itemMenu = menuControl.getElementsByTagName('a');
itemMenu.forEach((item) => {
    console.log(item)
})
console.log(itemMenu)

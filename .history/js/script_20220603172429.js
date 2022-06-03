/* =================== typing animation ====================*/
var typed = new Typed(".typing",{
    strings:["","Front-end Developer", "Programming lover"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})
/* Menu */
const menuControl = document.querySelectorAll('.item-nav');
menuControl.forEach((item) => {
    item.addEventListener('click', () => {
        menuControl.forEach((item) => {
            if(item.classList.contains('active'))
            {
                item.classList.remove('active')
            };
        })
       item.classList.add('active');
    })
})
const listContent = document.querySelectorAll('.section-content')
const controlContent = document.querySelectorAll('.section-control')
controlContent.forEach((control) => {
    control.addEventListener('click', () => {
        listContent.forEach(list => {
            
            list.classList.add('active-section')
        })
    })
})
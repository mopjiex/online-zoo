const menuIcon = document.querySelector('.mobile__menu-icon');
const mobMenu = document.querySelector('.mobile__menu-menu');
const exit = document.querySelector('.menu__exit');


menuIcon.addEventListener('click', () => {
    if(mobMenu.classList.contains('display-none')) {
        mobMenu.classList.remove('display-none');
        mobMenu.classList.add('display-block');
    } else {
        mobMenu.classList.remove('display-block');
        mobMenu.classList.add('display-none');
    }
})

exit.addEventListener('click', () => {
        mobMenu.classList.remove('display-block');
        mobMenu.classList.add('display-none');
})
const menuBtn = document.getElementById('menu-btn');
const nav = document.querySelector('nav');
const open = document.querySelector('.open');
const closed = document.querySelector('.closed');


menuBtn.addEventListener('click', () => {
    nav.classList.toggle('right');
    open.classList.toggle('a');
    closed.classList.toggle('b')
})


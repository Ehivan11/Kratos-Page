const icon = document.querySelector('.icon');
const search = document.querySelector('.search');
icon.onclick = function(){
    search.classList.toggle('active');
}
const menu = document.getElementById('nav-bar');
const body = document.querySelector('.fondo-web');
const btnClose = document.querySelector('.close-menu');
const showMenu = document.querySelector('.menu4');
const btnCloseMenu = document.querySelectorAll('.menu4 ul li a');

menu.addEventListener('click', (e) => {
    menu.classList.toggle ('icon-menu');
    showMenu.style.display = 'block';
},)

btnClose.addEventListener('click', (e) => {
    showMenu.style.display = 'none';
    menu.classList.add ('icon-menu');
})

for(let i = 0; i < btnCloseMenu.length; i++) {
    btnCloseMenu[i].addEventListener('click', (e) => {
        showMenu.style.display = 'none';
        menu.classList.add ('icon-menu');
    });
}



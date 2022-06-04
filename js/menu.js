const menu = document.querySelector('.menu');
const menu2 = document.querySelector('.menu2');
const navegacion = document.querySelector('.navegacion');

menu.addEventListener('click', ()=>{
    navegacion.classList.toggle("menu-salida")
    menu2.classList.toggle("menu2-abierto")
})

window.addEventListener('click', e=>{
    if(navegacion.classList.contains('menu-salida') && e.target != menu && e.target != navegacion){
        navegacion.classList.toggle("menu-salida")
        menu2.classList.toggle("menu2-abierto")
    }
})
const toggleOpen = document.querySelector('.header-toggle');
const menu = document.querySelector('.header-menu');
const toggleClose = document.querySelector('.header-close');
const modal = document.querySelector('.wrapper');
const body = document.getElementsByTagName('body')[0];
toggleOpen.addEventListener('click', ()=> {
    menu.classList.add('is-active');
    if(toggleOpen.style.display = 'none') {
        toggleClose.style.display = 'block';
    }
    else {
        toggleClose.style.display = 'none';
    }
})
toggleClose.addEventListener('click', ()=>{
    menu.classList.remove('is-active');
    if(toggleOpen.style.display = 'block') {
        toggleClose.style.display = 'none';
    }
    else {
        toggleClose.style.display = 'block';
    }
})
window.onclick = function(event) {
    if (!event.target.matches('.header-toggle')) {
        menu.classList.remove('is-active');
        if(toggleOpen.style.display = 'block') {
            toggleClose.style.display = 'none';
        }
        else {
            toggleClose.style.display = 'block';
        }
    }
    
}
// document.addEventListener('click', ()=>{
//     if(!menu.contains(e.target) && e.target.matches(".header-toggle")) {
//         menu.classList.remove('is-active');
//     }
// })
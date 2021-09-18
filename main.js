const menu = document.querySelector('#header nav')
const bot = document.querySelectorAll('nav .toggle')

for(const elemento of bot){
    elemento.addEventListener('click', function(){
        menu.classList.toggle('show')
    })
}

const links = document.querySelectorAll('nav ul li a')

    for(const e of links){
        e.addEventListener('click', function() {
            menu.classList.remove('show')
        })
    }

    /* sombra header */

const header = document.querySelector('header')
const h = header.offsetHeight

window.addEventListener('scroll', function(){
    if(window.scrollY >= h){
        header.classList.add('scroll')
    }
    
    else{
        header.classList.remove('scroll')
    }
})

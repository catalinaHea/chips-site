const navMenu = document.getElementById('nav-menu'),
    navToogle =document.getElementById('nav-toogle'),
    navClose = document.getElementById('nav-close')

if(navToogle){
    navToogle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const shadowHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header'):header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll'): scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
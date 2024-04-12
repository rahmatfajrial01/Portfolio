const navMenu = document.querySelector('#nav-menu')
const navList = document.querySelector('#nav-list')
const hamburger = document.querySelector('#hamburger')
const img1 = document.querySelector('#img1')
const img2 = document.querySelector('#img2')

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('hidden')
    img1.classList.toggle('hidden')
    img2.classList.toggle('hidden')
})
navList.addEventListener('click', () => {
    navMenu.classList.toggle('hidden')
    img1.classList.toggle('hidden')
    img2.classList.toggle('hidden')
})

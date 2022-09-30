function scrollTo(element) {
    window.scroll({
       left: 0,
       top: element.offsetTop,
       behavior: 'smooth'
     })
    }

let buttons = document.querySelectorAll('.navScroll')

buttons.forEach(el => {
    el.addEventListener ('click', () => {
        scrollTo(document.querySelector('#'+ el.dataset.scrollto))
    })
})

let buttonsDown = document.querySelector('.slick-down')
let here = document.querySelector('.here')

buttonsDown.addEventListener ('click', () => {
        scrollTo(here)})


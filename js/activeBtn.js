
window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    let elementNav = document.querySelector('.header__nav')
      document.querySelectorAll('.section').forEach((el, i) => {
      if (el.offsetTop - elementNav.clientHeight - elementNav.offsetTop <= scrollDistance) {
          document.querySelectorAll('.nav__list li').forEach((el) => {
            if (el.classList.contains('activeBtn')) {
              el.classList.remove('activeBtn') 
            }})
           console.log(el.id, i)
           document.querySelectorAll('.nav__item').forEach((element) => {
            console.log(element.dataset.scrollto)
              if (element.dataset.scrollto == el.id) {
                element.classList.add('activeBtn')
              }
           })
      }
    })
  })



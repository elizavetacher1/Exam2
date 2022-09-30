$(document).ready(function() {

    $('.news__block').slick({
        dots: true,
        slidesToShow: 3,
        autoplay: 4000,
        slidesToScroll: 1,
        behavior: 'smooth',
        responsive: [
            { 
                breakpoint: 800,
                settings: {
                    slidesToShow: 1
                    
                }
            }
        ]
    })
});

$(document).ready(function() {

    $('.header__banner').slick({
        dots: true,
        slidesToShow: 1,
        autoplay: 4000,
        slidesToScroll: 1,
        behavior: 'smooth'
    })
});

let el1 = document.querySelector(".btn__zoom");
let el2 = document.querySelector(".zoomMe");

el1.addEventListener('click', function() {
    el2.style.transform = 'scale(1.4)';
});

document.addEventListener("mouseup", function(event) {
    let obj = document.getElementById("imageToZoom");
    if (!obj.contains(event.target)) {
        el2.style.transform = 'scale(1)';
    }
});
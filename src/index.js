'use strict'

// слайдер
let slideIndex = 1;

showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
    
}

function previousSlide() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slider_item");
    console.log(slides)
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    for (let slide of slides) {
        slide.style.display = "none";
    }
        console.log(slideIndex);
    slides[slideIndex - 1].style.display = "flex";    
    }


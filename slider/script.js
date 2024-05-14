const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let activeSlide = 0;

function showSlide(slideIndex) {
    slider.style.transform = `translateX(${slideIndex * -500}px)`;
}

showSlide(activeSlide);

prevBtn.addEventListener('click', () => {
    if (activeSlide > 0) {
        activeSlide--;
        showSlide(activeSlide);
    }
});

nextBtn.addEventListener('click', () => {
    if (activeSlide < slider.children.length - 1) {
        activeSlide++;
        showSlide(activeSlide);
    }
});

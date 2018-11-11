new Swiper(".swiper-container", {
    speed: 400, 
    spaceBetween: 0,
    effect: "coverflow",
    slidesPerView: 3,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});
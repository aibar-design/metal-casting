// Простой слайдер для всех блоков с data-slider
document.addEventListener("DOMContentLoaded", () => {
    const sliders = document.querySelectorAll("[data-slider]");

    sliders.forEach((slider) => {
        const slides = slider.querySelectorAll(".slider-slide");
        const prevBtn = slider.querySelector(".prev");
        const nextBtn = slider.querySelector(".next");

        if (slides.length === 0) return;

        let current = 0;

        const showSlide = (index) => {
            slides.forEach((slide, i) => {
                slide.classList.toggle("active", i === index);
            });
        };

        prevBtn.addEventListener("click", () => {
            current = (current - 1 + slides.length) % slides.length;
            showSlide(current);
        });

        nextBtn.addEventListener("click", () => {
            current = (current + 1) % slides.length;
            showSlide(current);
        });
    });
});

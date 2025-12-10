// Простой слайдер для всех блоков .slider
document.addEventListener("DOMContentLoaded", () => {
    const sliders = document.querySelectorAll(".slider");

    sliders.forEach(slider => {
        const slides = slider.querySelectorAll(".slide");
        const prevBtn = slider.querySelector(".prev");
        const nextBtn = slider.querySelector(".next");

        if (slides.length === 0) return;

        let current = 0;

        const showSlide = (index) => {
            slides.forEach((slide, i) => {
                slide.classList.toggle("active", i === index);
            });
        };

        const goPrev = () => {
            current = (current - 1 + slides.length) % slides.length;
            showSlide(current);
        };

        const goNext = () => {
            current = (current + 1) % slides.length;
            showSlide(current);
        };

        prevBtn.addEventListener("click", goPrev);
        nextBtn.addEventListener("click", goNext);

        // Автопрокрутка (можно выключить, если не нужно)
        setInterval(goNext, 5000);
    });
});

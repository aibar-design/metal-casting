// Простое слайд-шоу по data-images

document.addEventListener("DOMContentLoaded", () => {
  const slideshows = document.querySelectorAll(".slideshow");

  slideshows.forEach((block) => {
    const list = (block.dataset.images || "")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    if (list.length <= 1) return;

    const img = block.querySelector("img");
    if (!img) return;

    let index = 0;

    setInterval(() => {
      index = (index + 1) % list.length;
      img.src = "images/" + list[index];
    }, 3000);
  });

  // Переключение активной языковой кнопки (пока только визуально)
  const langButtons = document.querySelectorAll(".lang-btn");
  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      langButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });
});

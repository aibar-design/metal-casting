// Галереи для 5 блоков услуг.
// Файлы лежат в папке images/ и сгруппированы по первой цифре.
const galleries = {
  1: ["111.jpg", "112.jpg", "113.jpg", "114.jpg"],
  2: ["221.jpg", "222.jpg", "223.jpg", "224.jpg"],
  3: ["331.jpg", "332.jpg"],
  4: ["441.jpg", "442.jpg"],
  5: ["551.jpg", "552.jpg", "553.jpg"],
};

document.addEventListener("DOMContentLoaded", () => {
  const blocks = document.querySelectorAll(".service-block");

  blocks.forEach((block) => {
    const id = block.dataset.gallery;
    const images = galleries[id];
    if (!images || images.length === 0) return;

    let index = 0;
    const imgEl = block.querySelector(".service-gallery img");
    const prevBtn = block.querySelector(".gallery-btn.prev");
    const nextBtn = block.querySelector(".gallery-btn.next");

    function updateImage() {
      imgEl.src = `images/${images[index]}`;
    }

    prevBtn.addEventListener("click", () => {
      index = (index - 1 + images.length) % images.length;
      updateImage();
    });

    nextBtn.addEventListener("click", () => {
      index = (index + 1) % images.length;
      updateImage();
    });
  });
});

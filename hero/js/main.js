const slides = document.querySelectorAll(".slider-img img");
let index = 0;

function showSlide() {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
  });

  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

// Start with the first image visible
slides[0].classList.add("active");

// Change slide every 3 seconds
setInterval(showSlide, 3000);

// Carousel Idea inspired by: https://www.youtube.com/c/Hyperplexed
let activeIndex = 0;
const slides = document.querySelectorAll("article");
const nav = document.querySelector("nav");

function changeSlide(newIndex) {
  const currentSlide = slides[activeIndex];
  const nextSlide = slides[newIndex];
  
  currentSlide.dataset.status = newIndex > activeIndex ? "before" : "after";
  nextSlide.dataset.status = newIndex > activeIndex ? "becoming-active-from-after" : "becoming-active-from-before";

  setTimeout(() => {
    nextSlide.dataset.status = "active";
    activeIndex = newIndex;
  }, 80); // ~80ms transition
}

const handleNextClick = () => {
  const nextIndex = (activeIndex + 1) % slides.length;
  changeSlide(nextIndex);
}

window.matchMedia("(max-width: 800px)").addEventListener('change', (e) => {
  if (!e.matches) {
    nav.dataset.transitionable = "false";
    nav.dataset.toggled = "false";
  }
});

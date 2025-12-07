// NAV
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const close = document.querySelector(".hamburger__close");

function toggleMenu() {
  nav.classList.toggle("open");
  hamburger.classList.toggle("open");
  close.classList.toggle("visible");
}

hamburger.addEventListener("click", toggleMenu);
close.addEventListener("click", toggleMenu);

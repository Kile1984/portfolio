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

// FORM
const submit = document.querySelector(".form__submit");

submit.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(e);
});

// MAP
var map = L.map("map").setView([44.8873868858456, 20.45131738180942], 15);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([44.8873868858456, 20.45131738180942])
  .addTo(map)
  .bindPopup("Home")
  .openPopup();

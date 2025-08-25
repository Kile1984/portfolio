const form = document.querySelector(".form");
const inputs = document.querySelectorAll(".form__input");
const textarea = document.querySelector(".form__textarea");

form.addEventListener("sumbit", function (e) {
  e.preventDefault();

  [...inputs].map((i) => {
    console.log(i);
  });
});

const submit = document.querySelector(".form__submit");
const inputs = document.querySelectorAll(".form__input");
const textarea = document.querySelector(".form__textarea");

submit.addEventListener("click", function (e) {
  e.preventDefault();

  [...inputs].map((i) => {
    console.log(i);
  });
});

const form = document.querySelector(".form");
const inputs = document.querySelectorAll(".form__input");
const textarea = document.querySelector(".form__textarea");

// RESET FIELDS

const reset = () => {
  inputs.forEach((input) => {
    input.classList.remove("valid");
    input.value = "";
  });
  textarea.value = "";
  textarea.classList.remove("valid");
};

// TOGGLE CLASS
const toggleClass = (field, isValid) => {
  field.classList.toggle("valid", isValid);
  field.classList.toggle("invalid", !isValid);
};

// VALIDATE INPUT FIELDS
const validateInput = (input) => {
  let isValid = true;
  const pattern = input.getAttribute("pattern");

  if (input.value.trim() === "") isValid = false;

  if (pattern) {
    const regex = new RegExp(pattern);
    isValid = regex.test(input.value);
  }

  toggleClass(input, isValid);

  return isValid;
};

// VALIDATE TEXAREA
const validTexArea = (texarea) => {
  let isValid = true;

  if (texarea.value.trim() === "") isValid = false;

  toggleClass(texarea, isValid);

  return isValid;
};

// FORM VALIDATING
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isFormValid = true;

  inputs.forEach((input) => {
    if (!validateInput(input)) isFormValid = false;
  });

  if (!validTexArea(textarea)) isFormValid = false;

  if (isFormValid) reset();
});

// VALIDATE ON INPUT CHANGE
inputs.forEach((input) => {
  input.addEventListener("input", () => validateInput(input));
});

textarea.addEventListener("input", () => {
  validTexArea(textarea);
});

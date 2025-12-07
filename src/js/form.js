emailjs.init("NwFs8-ayjGt7h_vHa");

const form = document.querySelector(".form");
const inputs = document.querySelectorAll(".form__input");
const textarea = document.querySelector(".form__textarea");

// RESET FIELDS
const reset = () => {
  form.reset();

  [...inputs, textarea].forEach((field) => {
    field.classList.remove("valid", "invalid");
  });
};

// TOGGLE CLASS
const toggleClass = (field, isValid) => {
  field.classList.remove("valid", "invalid");
  field.classList.add(isValid ? "valid" : "invalid");
};

// VALIDATE FIELDS
const regexCache = {};

const validateField = (field) => {
  let isValid = true;

  const pattern = field.getAttribute("pattern");

  if (field.value.trim() === "") isValid = false;

  if (pattern) {
    if (!regexCache[pattern]) regexCache[pattern] = new RegExp(pattern);

    isValid = regexCache[pattern].test(field.value);
  }

  toggleClass(field, isValid);

  return isValid;
};

// FORM VALIDATING
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isFormValid = true;

  [...inputs, textarea].forEach((field) => {
    if (!validateField(field)) isFormValid = false;
  });

  const params = {
    form_name: form.form_name.value,
    form_mail: form.form_mail.value,
    form_message: form.form_message.value,
  };

  console.log(params);

  if (isFormValid) {
    emailjs
      .sendForm("service_0ty3ug4", "template_gnl22q5", form)
      .then(() => {
        reset();

        window.location.href = "thank-you.html";
      })
      .catch((error) => {
        alert("❌ Greška pri slanju: " + error.text);
        window.location.href = "error.html";
      });
  }
});

// VALIDATE ON INPUT CHANGE
[...inputs, textarea].forEach((field) => {
  field.addEventListener("input", () => validateField(field));
});

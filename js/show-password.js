let eye = document.querySelector(".form__password__input i");
let passwordInput = document.querySelector("#password");
 eye.addEventListener("click", function () {
  eye.classList.toggle("fa-eye-slash");
  eye.classList.toggle("fa-eye");

  let type = passwordInput.getAttribute("type");
  if (type === "password") {
    passwordInput.setAttribute("type", "text");
  }else {
    passwordInput.setAttribute("type", "password");
  }
 })
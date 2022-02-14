// select var
const email = document.querySelector("#email");
const submit = document.querySelector(".btn-primary");
let message = document.querySelector(".error-msg");

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (message.value == "") {
    message = message.textContent = "Oops! Please add your email";
    return message;
  } else if (email.value == re) {
    return re.test(String(email).toLowerCase());
  } else {
    message = message.textContent = "Try again !";
    return message;
  }
}

submit.addEventListener("click", function (e) {
  e.preventDefault();
  message.classList.add("error-msg--show");
  validateEmail(email.value);
  return message.classList.remove("error-msg--show");
});

const button = document.querySelector(".btn");
const mail = document.querySelector(".mail");
const err = document.querySelector(".error");

button.addEventListener("click", function () {
  let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (regex.test(mail.value)) {
    mail.style.borderColor = "hsl(223, 100%, 88%)";
    err.style.display = "none";
  } else {
    mail.style.borderColor = "red";
    err.style.display = "block";
  }
});

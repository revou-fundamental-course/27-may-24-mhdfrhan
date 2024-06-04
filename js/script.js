document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("nama").textContent = "Muhammad Farhan";

  const hamburgerBtn = document.querySelector(".hamburger-btn");
  const navMenu = document.querySelector(".nav-menu");
  const hamburger = document.querySelector(".hamburger");

  hamburgerBtn.addEventListener("click", function () {
    navMenu.classList.toggle("open");
    hamburger.classList.toggle("open");
    if (navMenu.classList.contains("open")) {
      navMenu.style.height = navMenu.scrollHeight + "px";
    } else {
      navMenu.style.height = "0";
    }
  });

  const form = document.querySelector(".message-form");
  const nameOutput = document.getElementById("name-output");
  const birthdateOutput = document.getElementById("birthdate-output");
  const genderOutput = document.getElementById("gender-output");
  const messageOutput = document.getElementById("message-output");
  const currentTimeOutput = document.getElementById("current-time");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = form.querySelector("#name").value;
    const birthdate = form.querySelector("#birthdate").value;
    const gender = form.querySelector('input[name="gender"]:checked').value;
    const message = form.querySelector("#message").value;

    nameOutput.textContent = name;
    birthdateOutput.textContent = birthdate;
    genderOutput.textContent = gender;
    messageOutput.textContent = message;

    const currentTime = new Date().toLocaleTimeString();
    currentTimeOutput.textContent = currentTime;

    form.reset();
  });

  const yearElement = document.getElementById("tahun");
  const currentYear = new Date().getFullYear();
  yearElement.textContent = currentYear;
});

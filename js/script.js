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

  const yearElement = document.getElementById("tahun");
  const currentYear = new Date().getFullYear();
  yearElement.textContent = currentYear;
});

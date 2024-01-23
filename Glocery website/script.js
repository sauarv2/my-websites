const searchEL = document.getElementById("search");
const cartEL = document.getElementById("cart");
const personEL = document.getElementById("person");
const menuEL = document.getElementById("menu");
const cartboxEL = document.querySelector(".cart");
const boxEL = document.querySelector(".box");
const loginFormEL = document.querySelector(".loginForm");
const navEL = document.querySelector("nav");

searchEL.addEventListener("click", () => {
  boxEL.classList.toggle("boxActive");
  navEL.classList.remove("navActive");
  loginFormEL.classList.remove("cartActive");
  cartboxEL.classList.remove("cartActive");
});

cartEL.addEventListener("click", () => {
  cartboxEL.classList.toggle("cartActive");
  boxEL.classList.remove("boxActive");
  navEL.classList.remove("navActive");
  loginFormEL.classList.remove("cartActive");
});

personEL.addEventListener("click", () => {
  loginFormEL.classList.toggle("cartActive");
  cartboxEL.classList.remove("cartActive");
  boxEL.classList.remove("boxActive");
  navEL.classList.remove("navActive");
});

menuEL.addEventListener("click", () => {
  navEL.classList.toggle("navActive");
  loginFormEL.classList.remove("cartActive");
  cartboxEL.classList.remove("cartActive");
  boxEL.classList.remove("boxActive");
});

window.addEventListener("scroll", () => {
  navEL.classList.remove("navActive");
});

const swiper = new Swiper(".swiper", {
  // loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
});

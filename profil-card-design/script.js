const profileImg = document.querySelector(".profile-card img");
const menuBtn = document.querySelector(".menu-btn");
const overlay = document.querySelector(".overlay");
const more = document.querySelector(".more");

menuBtn.addEventListener("click", () => {
  profileImg.classList.toggle("img-expand");
  overlay.classList.toggle("overlay-opened");
  more.classList.toggle("more-opened");
});

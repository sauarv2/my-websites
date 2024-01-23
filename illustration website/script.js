const iconEl = document.querySelector(".icon");
const icon2El = document.querySelector(".icon2");
const sideNavEl = document.querySelector(".side-nav");
const ioniconEl = document.querySelector(".ion-icon");
const i1El = document.querySelector(".i1");
const i2El = document.querySelector(".i2");

i1El.addEventListener("click", () => {
  // ioniconEl.classList.add("close-outline");
  i1El.classList.add("vnish");
  i1El.classList.add("fade-out");
  sideNavEl.classList.toggle("side-navhide");
  remove();
});

i2El.addEventListener("click", () => {
  console.log("click");
  add();
});

function remove() {
  i2El.classList.remove("vnish");
}
function add() {
  i2El.classList.add("vnish");
  i1El.classList.remove("fade-out");
  i1El.classList.add("fade-in");
  i1El.classList.remove("vnish");
  sideNavEl.classList.remove("side-navhide");
}

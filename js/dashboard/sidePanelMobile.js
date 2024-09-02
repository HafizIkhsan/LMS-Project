const hamburger = document.getElementById("hamburger");
const background = document.getElementById("background-popup");
const sidePanel = document.getElementById("sidePanel");
const close = document.getElementById("close-side");

hamburger.addEventListener("click", () => {
  background.style.display = "block";
  sidePanel.style.display = "block";
});

close.addEventListener("click", () => {
  sidePanel.style.display = "none";
});

background.addEventListener("click", () => {
  sidePanel.style.display = "none";
});

export default hamburger;

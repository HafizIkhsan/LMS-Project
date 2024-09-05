const infoIcon = document.getElementById("info");
let hover = false;
infoIcon.addEventListener("mouseenter", (e) => {
  let gambar = e.target.lastElementChild;
  gambar.setAttribute("src", "assets/Icon/Light/info_main.svg");
});

infoIcon.addEventListener("mouseleave", (e) => {
  if (!hover) {
    let gambar = e.target.lastElementChild;
    gambar.setAttribute("src", "assets/Icon/Light/info_secondary.svg");
  }
});

infoIcon.addEventListener("click", (e) => {
  hover = true;
  let textIn = e.target.previousElementSibling;
  textIn.classList.toggle("in");
  let gambar = e.target;
  if (textIn.classList.contains("in")) {
    gambar.setAttribute("src", "assets/Icon/Light/info_main.svg");
  } else {
    if (hover) {
      gambar.setAttribute("src", "assets/Icon/Light/info_secondary.svg");
    }
  }
});

export default infoIcon;

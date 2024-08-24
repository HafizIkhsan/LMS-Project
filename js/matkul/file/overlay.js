const tugas = document.querySelector(".tugas");
const materi = document.querySelector(".materi");
const background = document.getElementById("background-popup");
const overlayTugas = document.getElementById("overlay-tugas");
const overlayMateri = document.getElementById("overlay-materi");
const overlay = document.querySelector(".overlay");
const close = document.querySelectorAll(".close");
const body = document.body;

//Shows overlay
tugas.addEventListener("click", function () {
  background.style.display = "block";
  body.style.overflow = "hidden";
  overlayTugas.style.display = "block";
});

materi.addEventListener("click", function () {
  background.style.display = "block";
  body.style.overflow = "hidden";
  overlayMateri.style.display = "block";
});

//Close overlay
close.forEach(function (e) {
  e.addEventListener("click", function () {
    const button = e.closest(".overlay");
    background.style.display = "none";
    body.style.overflow = "scroll";
    button.style.display = "none";
    button.classList.remove("full");
  });
});

background.addEventListener("click", function () {
  background.style.display = "none";
  body.style.overflow = "scroll";
  overlayMateri.style.display = "none";
  overlayTugas.style.display = "none";
  overlayMateri.classList.remove("full");
  overlayTugas.classList.remove("full");
});

// Expand & Shrink Overlay
const expand = document.querySelectorAll(".expand");
expand.forEach(function (e) {
  e.addEventListener("click", function () {
    const button = e.closest(".overlay");
    if (button.classList.contains("full")) {
      button.classList.remove("full");
      e.setAttribute("src", "../../assets/Icon/Light/Expand.svg");
    } else {
      button.classList.add("full");
      e.setAttribute("src", "../../assets/Icon/Light/Shrink.svg");
    }
  });
});
export { tugas, materi, background, close };

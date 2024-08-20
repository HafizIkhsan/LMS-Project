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
  overlay.style.display = "block";
});

materi.addEventListener("click", function () {
  background.style.display = "block";
  body.style.overflow = "hidden";
  overlay.style.display = "block";
});

//Close overlay
close.forEach(function (e) {
  e.addEventListener("click", function () {
    background.style.display = "none";
    body.style.overflow = "scroll";
    overlay.style.display = "none";
    overlay.classList.remove("ful");
  });
});

background.addEventListener("click", function () {
  background.style.display = "none";
  body.style.overflow = "scroll";
  overlay.style.display = "none";
  overlay.classList.remove("ful");
});

// Expand & Shrink Overlay
const expand = document.querySelectorAll(".expand");
expand.forEach(function (e) {
  e.addEventListener("click", function () {
    if (overlay.classList.contains("full")) {
      overlay.classList.remove("full");
      e.setAttribute("src", "../../assets/Icon/Light/Expand.svg");
    } else {
      overlay.classList.add("full");
      e.setAttribute("src", "../../assets/Icon/Light/Shrink.svg");
    }
  });
});

export { tugas, materi, background, close };

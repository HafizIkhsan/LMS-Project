const tugas = document.querySelector(".tugas");
const materi = document.querySelector(".materi");
const background = document.getElementById("background-popup");
const overlayTugas = document.getElementById("overlay-tugas");
const overlayMateri = document.getElementById("overlay-materi");
const body = document.body;

tugas.addEventListener("click", function () {
  background.style.display = "block";
  body.style.position = "fixed";
  overlayTugas.style.display = "block";
});

materi.addEventListener("click", function () {
  background.style.display = "block";
  body.style.position = "fixed";
  overlayMateri.style.display = "block";
});

background.addEventListener("click", function () {
  background.style.display = "none";
  body.style.position = "static";
  overlayTugas.style.display = "none";
  overlayMateri.style.display = "none";
});

export default overlay;

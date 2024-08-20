const tugas = document.querySelector(".tugas");
const materi = document.querySelector(".materi");
const background = document.getElementById("background-popup");
const overlayTugas = document.getElementById("overlay-tugas");
const overlayMateri = document.getElementById("overlay-materi");
const body = document.body;

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

background.addEventListener("click", function () {
  background.style.display = "none";
  body.style.overflow = "scroll";
  overlayTugas.style.display = "none";
  overlayMateri.style.display = "none";
});

export { tugas, materi, background };

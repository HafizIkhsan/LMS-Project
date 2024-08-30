const tugas = document.querySelectorAll(".tugas");
const backgroundPopUp = document.getElementById("background-popup");
const overlayTugas = document.getElementById("overlay-tugas");
const body = document.body;

tugas.forEach((e) => {
  e.addEventListener("click", () => {
    // overlay
    backgroundPopUp.style.display = "block";
    body.style.overflow = "hidden";
    overlayTugas.style.display = "block";
  });
});

export default tugas;

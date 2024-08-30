const tugas = document.querySelectorAll(".tugas");
const materi = document.querySelectorAll(".materi");
const background = document.getElementById("background-popup");
const overlayTugas = document.getElementById("overlay-tugas");
const overlayMateri = document.getElementById("overlay-materi");
const close = document.querySelectorAll(".close");
const body = document.body;

//Shows overlay
tugas.forEach((e) => {
  e.addEventListener("click", function () {
    // judul
    judul(e, "judul");

    // dosen
    dosen(e, "nm-dosen-tugas");

    // tanggal
    tanggal(e, "tanggal-tugas");

    // overlay
    background.style.display = "block";
    body.style.overflow = "hidden";
    overlayTugas.style.display = "block";
  });
});

materi.forEach((e) => {
  e.addEventListener("click", function () {
    // judul
    judul(e, "judul-materi");

    // Pertemuan traversal
    let pertemuan = e.firstElementChild.nextElementSibling.firstElementChild.firstElementChild;
    let pertemuanMateri = document.getElementById("pertemuan-materi");
    pertemuanMateri.innerHTML = pertemuan.innerHTML;

    // dosen
    dosen(e, "nm-dosen-materi");

    // tanggal
    tanggal(e, "tanggal-materi");

    // overlay
    background.style.display = "block";
    body.style.overflow = "hidden";
    overlayMateri.style.display = "block";
  });
});

// ambil judul
let judul = (e, id) => {
  // Judul traversal
  let judul = e.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.firstElementChild;
  let judulOverlay = document.getElementById(id);
  judulOverlay.innerHTML = judul.innerHTML;
};

// ambil tanggal
let tanggal = (e, id) => {
  // Tanggal traversal
  let tanggal = e.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling;
  let tanggalOverlay = document.getElementById(id);
  tanggalOverlay.innerHTML = tanggal.innerHTML;
};

// ambil dosen
let dosen = (e, id) => {
  // dosen
  let dosen = e.parentElement.parentElement.nextElementSibling.firstElementChild.firstElementChild.lastElementChild.lastElementChild.firstElementChild.firstElementChild.firstElementChild;
  let dosenOverlay = document.getElementById(id);
  dosenOverlay.innerHTML = dosen.innerHTML;
};
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
  body.style.overflowX = "hidden";
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
export { tugas, materi, background, close, expand, judul };

const material = document.querySelectorAll(".material");
const backgroundPopUp = document.getElementById("background-popup");
const overlayMateri = document.getElementById("overlay-materi");
const pertemuan = document.getElementById("pertemuan");
const body = document.body;

material.forEach((e) => {
  let icon = e.querySelector(".materi-img");
  let matkul = e.querySelector(".matkul");
  if (matkul.innerHTML === "Aristektur dan Organisasi Komputer *)") {
    icon.style.backgroundColor = "rgb(100, 100, 100)";
    document.getElementById("nm-dosen-materi").innerHTML = "<b>Muhammad Sobari M.Kom</b>";
  } else if (matkul.innerHTML === "Aljabar Linier dan Matrik *)") {
    icon.style.backgroundColor = "rgb(255, 148, 49)";
    document.getElementById("nm-dosen-materi").innerHTML = "<b>Nur Laeli M.Si</b>";
  }

  e.addEventListener("click", () => {
    judul(e, "judul");
    tanggal(e, "tanggal-materi");

    // nama Dosen & warna
    if (matkul.innerHTML === "Aristektur dan Organisasi Komputer *)") {
      iconColor(100, 100, 100);
      document.getElementById("nm-dosen-materi").innerHTML = "<b>Bambang Yudho M.Kom</b>";
    } else if (matkul.innerHTML === "Aljabar Linier dan Matrik *)") {
      iconColor(255, 148, 49);
      document.getElementById("nm-dosen-materi").innerHTML = "<b>Nur Laeli M.Si</b>";
    }

    // pertemuan
    let pertemuanOverlay = document.getElementById("pertemuan-materi");
    pertemuanOverlay.innerHTML = pertemuan.innerHTML;
    // overlay
    backgroundPopUp.style.display = "block";
    body.style.overflow = "hidden";
    overlayMateri.style.display = "block";
  });
});

let iconColor = (x, y, z) => {
  let icon = document.getElementById("materi-img");
  icon.style.backgroundColor = `rgb(${x},${y},${z})`;
  icon.style.borderRadius = "8px";
};

let judul = (e, id) => {
  let judulCard = e.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.firstElementChild;
  let judulOverlay = document.getElementById(id);
  judulOverlay.innerHTML = judulCard.innerHTML;
};

let tanggal = (e, id) => {
  let tanggalCard = e.firstElementChild.nextElementSibling.lastElementChild;
  let tanggalOverlay = document.getElementById(id);
  tanggalOverlay.innerHTML = tanggalCard.innerHTML;
};

// click form icon change
document.addEventListener("input", (e) => {
  if (e.target.classList.contains("comment-input")) {
    let icon = e.target.nextElementSibling.firstElementChild;
    if (e.target.value.length != 0) {
      icon.setAttribute("src", "../assets/Icon/Filled/Send-Active.svg");
      let button = e.target.nextElementSibling;
      button.style.cursor = "pointer";
      button.removeAttribute("disabled");
    } else {
      icon.setAttribute("src", "../assets/Icon/Curved/Send.svg");
      let button = e.target.nextElementSibling;
      button.style.cursor = "default";
      button.setAttribute("disabled", "");
    }
  }
});

export default material;

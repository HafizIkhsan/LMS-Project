const tugas = document.querySelectorAll(".tugas");
const backgroundPopUp = document.getElementById("background-popup");
const overlayTugas = document.getElementById("overlay-tugas");
const body = document.body;

tugas.forEach((e) => {
  e.addEventListener("click", () => {
    let matkul = e.querySelector(".matkul");
    let namaDosen = document.getElementById("nm-dosen-tugas");
    let tanggalTugas = document.getElementById("tanggal-tugas");
    let tenggat = document.getElementById("tenggat");

    if (matkul.innerHTML === "Aljabar Linier dan Matrik *)") {
      iconColor(255, 148, 49);
      namaDosen.innerHTML = "<b>Nur Laeli M.Si</b>";
      tanggalTugas.innerHTML = "10 Juni 2024";
      tenggat.innerHTML = "Tenggat : <b style ='color:red'>Hari ini</b>";
    } else if (matkul.innerHTML === "Manajemen Proyek") {
      iconColor(98, 226, 87);
      namaDosen.innerHTML = "<b>Bagas Pratama S.T M.M</b>";
      tanggalTugas.innerHTML = "11 Juni 2024";
      tenggat.innerHTML = "Tenggat : <b style ='color:orange'>Besok</b>";
    } else if (matkul.innerHTML === "Sistem Basis Data *)") {
      iconColor(70, 98, 173);
      namaDosen.innerHTML = "<b>Muhammad Sobari M.Kom</b>";
      tanggalTugas.innerHTML = "17 Juni 2024";
      tenggat.innerHTML = "Tenggat : 02 Juli 2024";
    }

    judul(e, "judul");
    // overlay
    backgroundPopUp.style.display = "block";
    body.style.overflow = "hidden";
    overlayTugas.style.display = "block";
  });
});

let iconColor = (x, y, z) => {
  let icon = document.getElementById("tugas-img");
  icon.style.backgroundColor = `rgb(${x},${y},${z})`;
  icon.style.borderRadius = "8px";
};

let judul = (e, id) => {
  let judulCard = e.firstElementChild.nextElementSibling.firstElementChild.firstElementChild;
  let judulOverlay = document.getElementById(id);
  judulOverlay.innerHTML = judulCard.innerHTML;
};

export default tugas;

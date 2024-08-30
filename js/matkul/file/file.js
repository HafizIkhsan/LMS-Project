// Retrieve data
let day = localStorage.getItem("hari");
let time = localStorage.getItem("waktu");
let subjectName = localStorage.getItem("namaMatkul");
let lectureName = localStorage.getItem("namaDosen");
let lecturePhone = localStorage.getItem("tlpnDosen");
let lecturePhoto = localStorage.getItem("lecturePic");
let bgColor = localStorage.getItem("bgColor");

// bg Hero
document.getElementById("hero").style.backgroundColor = bgColor;

// judul hero
let matkul = document.querySelectorAll(".matkul");
matkul.forEach((e) => {
  e.innerHTML = subjectName;
});

document.getElementById("picLecture").setAttribute("src", `../../assets/Profile-Pict/dosen/${lecturePhoto}`);

document.getElementById("tgl").innerHTML = `${day}, ${time}`;
document.getElementById("dosen").innerHTML = lectureName;
document.getElementById("phone").innerHTML = lecturePhone;

export default document;

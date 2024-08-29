const sbd = document.getElementById("sbd");

sbd.addEventListener("click", () => {
  subject(sbd);
  lecture(sbd);
  dayTime(sbd);
  color(sbd);
});

let dayTime = (e) => {
  let day = e.querySelector(".day").innerHTML;
  let time = e.querySelector(".time").innerHTML;
  localStorage.setItem("hari", day);
  localStorage.setItem("waktu", time);
};

let subject = (e) => {
  let subjectName = e.querySelector(".nm-matkul").innerHTML;
  localStorage.setItem("namaMatkul", subjectName);
};

let lecture = (e) => {
  let lectureName = e.querySelector(".lecture-name").innerHTML;
  localStorage.setItem("namaDosen", lectureName);

  let lecturePhone = e.querySelector(".lecture-phone").innerHTML;
  localStorage.setItem("tlpnDosen", lecturePhone);
};

let color = (e) => {
  let div = e.querySelector(".top");
  let bgColor = window.getComputedStyle(div).backgroundColor;
  localStorage.setItem("bgColor", bgColor);
};

export default sbd;

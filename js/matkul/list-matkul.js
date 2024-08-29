const sbd = document.getElementById("sbd");
const psbd = document.getElementById("psbd");
const arsikom = document.getElementById("arsikom");

sbd.addEventListener("click", () => {
  subject(sbd);
  lecture(sbd);
  dayTime(sbd);
  color(sbd);
});

psbd.addEventListener("click", () => {
  subject(psbd);
  lecture(psbd);
  dayTime(psbd);
  color(psbd);
});

arsikom.addEventListener("click", () => {
  subject(arsikom);
  lecture(arsikom);
  dayTime(arsikom);
  color(arsikom);
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

  let lecturePic = e.querySelector(".lecture-picture");
  const lectureSrc = lecturePic.getAttribute("src");
  const lectureFileName = lectureSrc.split("/").pop();
  localStorage.setItem("lecturePic", lectureFileName);
};

let color = (e) => {
  let div = e.querySelector(".top");
  const styleAtt = div.getAttribute("style");
  const bgColor = styleAtt.split(":").pop();
  // let bgColor = window.getComputedStyle(styleAtt).backgroundColor;
  localStorage.setItem("bgColor", bgColor);
  console.log(bgColor);
};

export default sbd;

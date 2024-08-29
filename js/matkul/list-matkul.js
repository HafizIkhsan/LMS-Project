const sbd = document.getElementById("sbd");

sbd.addEventListener("click", () => {
  subject(sbd);
  lecture(sbd);
  let time = sbd.querySelector(".dateTime").innerHTML;
  console.log(time);
});

let subject = (e) => {
  let subjectName = e.querySelector(".nm-matkul");
  const subject = subjectName.innerHTML;
  localStorage.setItem("namaMatkul", subject);
};

let lecture = (e) => {
  let lectureName = e.querySelector(".lecture-name");
  const lecture = lectureName.innerHTML;
  localStorage.setItem("namaDosen", lecture);
};

export default sbd;

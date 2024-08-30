const forum = document.getElementById("forum-content");
const materi = document.getElementById("materi-content");
const tugas = document.getElementById("tugas-content");
const forumSubMenu = document.getElementById("forum");
const materiSubMenu = document.getElementById("materi");
const tugasSubMenu = document.getElementById("tugas");

forumSubMenu.addEventListener("click", () => {
  // Reset all submenu active classes
  forumSubMenu.classList.add("active-submenu");
  materiSubMenu.classList.remove("active-submenu");
  tugasSubMenu.classList.remove("active-submenu");

  forum.style.display = "block";
  materi.style.display = "none";
  tugas.style.display = "none";
  console.log("forum");
});

materiSubMenu.addEventListener("click", () => {
  forumSubMenu.classList.remove("active-submenu");
  materiSubMenu.classList.add("active-submenu");
  tugasSubMenu.classList.remove("active-submenu");

  forum.style.display = "none";
  materi.style.display = "block";
  tugas.style.display = "none";
  console.log("materi");
});

tugasSubMenu.addEventListener("click", () => {
  forumSubMenu.classList.remove("active-submenu");
  materiSubMenu.classList.remove("active-submenu");
  tugasSubMenu.classList.add("active-submenu");

  forum.style.display = "none";
  materi.style.display = "none";
  tugas.style.display = "block";
  console.log("tugas");
});

export { forumSubMenu, materiSubMenu, tugasSubMenu };

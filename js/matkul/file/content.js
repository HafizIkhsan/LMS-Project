const forum = document.getElementById("forum-content");
const materi = document.getElementById("materi-content");
const tugas = document.getElementById("tugas-content");
const forumSubMenu = document.getElementById("forum");
const materiSubMenu = document.getElementById("materi");
const tugasSubMenu = document.getElementById("tugas");
const bgColor = localStorage.getItem("bgColor");

forumSubMenu.addEventListener("click", () => {
  // Reset all submenu active classes
  forumSubMenu.classList.add("active-submenu");
  materiSubMenu.classList.remove("active-submenu");
  tugasSubMenu.classList.remove("active-submenu");

  forum.style.display = "block";
  materi.style.display = "none";
  tugas.style.display = "none";

  forumSubMenu.style.borderBottom = `4px solid ${bgColor}`;
  materiSubMenu.style.borderBottom = `none`;
  tugasSubMenu.style.borderBottom = `none`;
});

materiSubMenu.addEventListener("click", () => {
  forumSubMenu.classList.remove("active-submenu");
  materiSubMenu.classList.add("active-submenu");
  tugasSubMenu.classList.remove("active-submenu");

  forum.style.display = "none";
  materi.style.display = "block";
  tugas.style.display = "none";

  forumSubMenu.style.borderBottom = `none`;
  materiSubMenu.style.borderBottom = `4px solid ${bgColor}`;
  tugasSubMenu.style.borderBottom = `none`;
});

tugasSubMenu.addEventListener("click", () => {
  forumSubMenu.classList.remove("active-submenu");
  materiSubMenu.classList.remove("active-submenu");
  tugasSubMenu.classList.add("active-submenu");

  forum.style.display = "none";
  materi.style.display = "none";
  tugas.style.display = "block";

  forumSubMenu.style.borderBottom = `none`;
  materiSubMenu.style.borderBottom = `none`;
  tugasSubMenu.style.borderBottom = `4px solid ${bgColor}`;
});

export { forumSubMenu, materiSubMenu, tugasSubMenu };

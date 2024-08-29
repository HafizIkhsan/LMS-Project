const forum = document.getElementById("forum-content");
const materi = document.getElementById("materi-content");
const tugas = document.getElementById("tugas-content");
const forumSubMenu = document.getElementById("forum");
const materiSubMenu = document.getElementById("materi");
const tugasSubMenu = document.getElementById("tugas");
const subMenu = document.getElementById("sub-menu");

subMenu.addEventListener("click", (e) => {
  const clickedSubMenu = e.target.id;

  // Reset all submenu active classes
  forumSubMenu.classList.remove("active-submenu");
  materiSubMenu.classList.remove("active-submenu");
  tugasSubMenu.classList.remove("active-submenu");

  if (clickedSubMenu === "forum") {
    forumSubMenu.classList.add("active-submenu");
    forum.style.display = "block";
    materi.style.display = "none";
    tugas.style.display = "none";
  } else if (clickedSubMenu === "materi") {
    materiSubMenu.classList.add("active-submenu");
    forum.style.display = "none";
    materi.style.display = "block";
    tugas.style.display = "none";
  } else if (clickedSubMenu === "tugas") {
    tugasSubMenu.classList.add("active-submenu");
    forum.style.display = "none";
    materi.style.display = "none";
    tugas.style.display = "block";
  }
});

export default subMenu;

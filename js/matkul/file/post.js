import { batalkanButton } from "./textarea.js";

const form = document.getElementById("form");
const textArea = document.getElementById("main-input");
const posts = document.getElementById("posts");
const inputClick = document.querySelector(".click-expand");
const additionals = document.querySelectorAll(".additional");

let data = {};
let isEditing = false;
let originalContent = "";

// Form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  inputClick.style.display = "block";
  textArea.setAttribute("rows", "1");
  textArea.style.marginBottom = "0px";
  textArea.style.backgroundColor = "white";
  for (let i = 0; i < additionals.length; i++) {
    additionals[i].style.display = "none";
  }
  acceptData();
});

// Nerima data
let acceptData = () => {
  data["text"] = textArea.value;
  const formattedText = textArea.value.replace(/\n/g, "<br>");
  createPost(formattedText);
};

// Enter text
form.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    textArea.value += `\n`;
  }
});

// Delete post
let deletePost = (e) => {
  e.parentElement.parentElement.parentElement.parentElement.remove();
};

// Buat postingan
let createPost = (text) => {
  posts.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="post">
        <div class="person">
            <img src="../../assets/Profile-Pict/kwekkwek.jpeg" alt="profile-img" style="width: 40px; height: 40px; margin: 0px 16px 0px 0px; border-radius: 24px" />
            <div class="desc">
            <div>
                <p><b>Anda</b></p>
                <p>Baru saja</p>
            </div>
            <img class="settings" src="../../assets/Icon/Filled/Settings.svg" alt="" style="opacity: 50%; margin-right: 16px" />
            <div class="overlay-settings">
              <ul>
                <li class="edit">Edit</li>
              </ul>
              <ul>
                <li class="delete">Hapus</li>
              </ul>
            </div>
            </div>
        </div>
        <div class="line"></div>
        <div class="isi">
            <p>${text}</p>
        </div>
        <div class="line"></div>
        <div class="comment">
            <img src="../../assets/Profile-Pict/kwekkwek.jpeg" alt="profile-img" style="width: 40px; height: 40px; margin: 0px 16px 0px 0px; border-radius: 24px" />
            <textarea rows="1" class="comment-input" name="" id="" placeholder="Tambahkan komentar Anda..."></textarea>
            <button style="margin: 0px 8px; display: flex; align-items: center"><img src="../../assets/Icon/Curved/Send.svg" alt="" /></button>
        </div>
    </div>`
  );
  textArea.value = "";
};

// Settings
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("settings")) {
    const overlay = e.target.nextElementSibling;
    if (overlay) {
      overlay.style.display = overlay.style.display === "block" ? "none" : "block";
    }
  } else if (e.target.classList.contains("delete")) {
    e.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
  } else if (e.target.classList.contains("edit")) {
    isEditing = true;
    let postContent = e.target.parentElement.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.firstElementChild.innerHTML;
    originalContent = postContent;
    const formattedContent = postContent.replace(/<br\s*\/?>/gi, "\n");
    textArea.value = formattedContent;
    inputClick.style.display = "none";
    textArea.setAttribute("rows", "4");
    textArea.style.marginBottom = "16px";
    textArea.style.backgroundColor = "#f8f8f8";
    for (let i = 0; i < additionals.length; i++) {
      if (i == 0) {
        additionals[i].style.display = "block";
      } else {
        additionals[i].style.display = "flex";
      }
    }
    e.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
  } else if (e.target.id === "submit" && isEditing === true) {
    isEditing = false;
  } else if (e.target.id === "batalkan" && isEditing === true) {
    createPost(originalContent);
    console.log("edit clicked");
    isEditing = false;
  }
});

export default deletePost;

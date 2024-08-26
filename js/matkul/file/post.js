const form = document.getElementById("form");
const textArea = document.getElementById("main-input");
const posts = document.getElementById("posts");
const inputClick = document.querySelector(".click-expand");
const additionals = document.querySelectorAll(".additional");

let data = {};

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

  createPost();
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
let createPost = () => {
  const formattedText = textArea.value.replace(/\n/g, "<br>");
  posts.innerHTML += `
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
                <li onClick ="editPost(this)">Edit</li>
              </ul>
              <ul>
                <li onClick ="deletePost()" class="delete">Hapus</li>
              </ul>
            </div>
            </div>
        </div>
        <div class="line"></div>
        <div class="isi">
            <p>${formattedText}</p>
        </div>
        <div class="line"></div>
        <div class="comment">
            <img src="../../assets/Profile-Pict/kwekkwek.jpeg" alt="profile-img" style="width: 40px; height: 40px; margin: 0px 16px 0px 0px; border-radius: 24px" />
            <textarea rows="1" class="comment-input" name="" id="" placeholder="Tambahkan komentar Anda..."></textarea>
            <button style="margin: 0px 8px; display: flex; align-items: center"><img src="../../assets/Icon/Curved/Send.svg" alt="" /></button>
        </div>
    </div>`;
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
  }
});

// Edit post
let editPost = (e) => {};

export default deletePost;

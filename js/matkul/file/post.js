const form = document.getElementById("form");
const textArea = document.getElementById("main-input");
const posts = document.getElementById("posts");
const inputClick = document.querySelector(".click-expand");
const additionals = document.querySelectorAll(".additional");

let data = {};

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

let acceptData = () => {
  data["text"] = textArea.value;

  createPost();
};

let createPost = () => {
  posts.innerHTML += `
    <div class="post">
        <div class="person">
            <img src="../../assets/Profile-Pict/kwekkwek.jpeg" alt="profile-img" style="width: 40px; height: 40px; margin: 0px 16px 0px 0px; border-radius: 24px" />
            <div class="desc">
            <div>
                <p><b>Anda</b></p>
                <p>Baru saja</p>
            </div>
            <img src="../../assets/Icon/Filled/Settings.svg" alt="" style="opacity: 50%; margin-right: 16px" />
            </div>
        </div>
        <div class="line"></div>
        <div class="isi">
            <p>${data.text}</p>
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

export default data;

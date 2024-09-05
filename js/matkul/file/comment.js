const npm = localStorage.getItem("npm");
// name.innerHTML = npm;

let data = {};

// click form icon change
document.addEventListener("input", (e) => {
  if (e.target.classList.contains("comment-input")) {
    let icon = e.target.nextElementSibling.firstElementChild;
    if (e.target.value.length != 0) {
      icon.setAttribute("src", "../../assets/Icon/Filled/Send-Active.svg");
      let button = e.target.nextElementSibling;
      button.style.cursor = "pointer";
      button.removeAttribute("disabled");
    } else {
      icon.setAttribute("src", "../../assets/Icon/Curved/Send.svg");
      let button = e.target.nextElementSibling;
      button.style.cursor = "default";
      button.setAttribute("disabled", "");
    }
  }
});

// submit form
document.addEventListener("submit", (e) => {
  e.preventDefault();

  if (e.target.classList.contains("comment")) {
    let comments = e.target.previousElementSibling;
    let icon = e.target.lastElementChild.firstElementChild;
    icon.setAttribute("src", "../../assets/Icon/Curved/Send.svg");
    let button = e.target.lastElementChild;
    button.style.cursor = "default";

    let text = e.target.querySelector(".comment-input").value;
    if (e.target.classList.contains("priv")) {
      createPrivatePost(text, comments);
    } else {
      acceptData(text, comments);
    }
    e.target.querySelector(".comment-input").value = "";
  }
});

// Nerima data
let acceptData = (text, comments) => {
  data["text"] = text;
  // const formattedText = textArea.value.replace(/\n/g, "<br>");
  createPost(data["text"], comments);
};

// Buat komentar
let createPost = (data, comments) => {
  comments.innerHTML += `            
  <div class="comment">
    <img src="../../assets/Profile-Pict/kwekkwek.jpeg" alt="" style="margin-right: 24px; width: 40px; height: 40px; border-radius: 24px" />
    <div class="desc">
      <div>
        <p style="color: #a5a5a5"><b style="color: black">${npm}</b> &#128900; Baru saja</p>
        <p>${data}</p>
      </div>
    </div>
  </div>
  `;

  comments.lastElementChild.scrollIntoView({ behavior: "smooth" });
};

// Buat komentar pribadi
let createPrivatePost = (data, comments) => {
  comments.innerHTML += `            
  <div class="comment">
    <img src="../../assets/Profile-Pict/kwekkwek.jpeg" alt="" style="margin-right: 8px; width: 32px; border-radius: 24px" />
    <div class="desc">
      <div>
        <p style="color: #a5a5a5; font:400 10px Plus Jakarta Sans"><b style="color: black">${npm}</b> &#128900; Baru saja</p>
        <p style="font:400 10px Plus Jakarta Sans">${data}</p>
      </div>
    </div>
  </div>
  `;
};

export default document;

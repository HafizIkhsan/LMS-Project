const form = document.querySelectorAll(".comment");
const textArea = document.querySelectorAll(".comment-input");

const npm = localStorage.getItem("npm");
// name.innerHTML = npm;

let data = {};

// click form icon change
form.forEach((e) => {
  e.addEventListener("click", () => {
    textArea.forEach((t) => {
      t.addEventListener("input", (text) => {
        if (text.target.value.length != 0) {
          let icon = text.target.nextElementSibling.firstElementChild;
          icon.setAttribute("src", "../../assets/Icon/Filled/Send-Active.svg");
          let button = text.target.nextElementSibling;
          button.style.cursor = "pointer";
          button.removeAttribute("disabled");
        } else {
          let icon = text.target.nextElementSibling.firstElementChild;
          icon.setAttribute("src", "../../assets/Icon/Curved/Send.svg");
          let button = text.target.nextElementSibling;
          button.style.cursor = "default";
          button.setAttribute("disabled", "");
        }
      });
    });
  });
});

// submit form
form.forEach((e) => {
  e.addEventListener("submit", (e) => {
    e.preventDefault();
    let comments = e.target.previousElementSibling;
    let icon = e.target.lastElementChild.firstElementChild;
    icon.setAttribute("src", "../../assets/Icon/Curved/Send.svg");
    let button = e.target.lastElementChild;
    button.style.cursor = "default";
    let text = e.target.firstElementChild.nextElementSibling.value;
    acceptData(text, comments);
    e.target.firstElementChild.nextElementSibling.value = "";
  });
});

// Nerima data
let acceptData = (text, comments) => {
  data["text"] = text;
  // const formattedText = textArea.value.replace(/\n/g, "<br>");
  createPost(data["text"], comments);
};

// Buat postingan
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
};

export default document;

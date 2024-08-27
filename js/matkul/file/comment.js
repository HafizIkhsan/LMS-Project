const form = document.querySelectorAll(".comment");
const textArea = document.querySelectorAll(".comment-input");
const sendIcon = document.querySelectorAll(".send");

let data = {};

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

  e.addEventListener("submit", (e) => {
    console.log("submitted");
    e.preventDefault();
    let icon = e.target.lastElementChild.firstElementChild;
    icon.setAttribute("src", "../../assets/Icon/Curved/Send.svg");
    let button = e.target.lastElementChild;
    button.style.cursor = "default";
    acceptData();
  });
});

// Nerima data
let acceptData = () => {
  data["text"] = textArea.value;
  // const formattedText = textArea.value.replace(/\n/g, "<br>");
  createPost(formattedText);
};

// Buat postingan
let createPost = (text) => {
  posts += ``;
  textArea.value = "";
};

export default document;

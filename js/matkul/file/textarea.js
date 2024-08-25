const inputClick = document.querySelector(".click-expand");
const container = document.querySelector(".input-container");
const textArea = document.getElementById("main-input");
const additionals = container.querySelectorAll(".additional");
const batalkanButton = container.querySelector("#batalkan");
const submitButton = container.querySelector("#submit");

inputClick.addEventListener("click", function () {
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

  textArea.addEventListener("input", function (e) {
    if (e.target.value.length !== 0) {
      submitButton.classList.add("active");
    } else {
      submitButton.classList.remove("active");
    }
  });
});

batalkanButton.addEventListener("click", function () {
  inputClick.style.display = "block";
  textArea.setAttribute("rows", "1");
  textArea.style.marginBottom = "0px";
  textArea.style.backgroundColor = "white";
  for (let i = 0; i < additionals.length; i++) {
    additionals[i].style.display = "none";
  }
  textArea.value = "";
  event.preventDefault();
});

export { container, batalkanButton };

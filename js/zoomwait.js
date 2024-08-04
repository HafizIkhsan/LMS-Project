const button = document.getElementById("reminder");

button.addEventListener("click", function (e) {
  button.classList.add("active");
});

export default button;

let modal = document.getElementById("myModal");
var btn = document.getElementById("openModal");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

let title = document.getElementById("title");
let date = document.getElementById("date");
let description = document.getElementById("description");
let modalBtn = document.querySelector('.modalBtn');

title.addEventListener('input', changeBackground);
date.addEventListener('input', changeBackground);
// description.addEventListener('input', changeBackground);

function changeBackground() {
if (title.value !== "" || date.value !== "" || description.value !== "") {
  modalBtn.style.setProperty('--color-btn', '#e46562;');
  modalBtn.style.setProperty('--color-hover', '#ff4c49;');
} else {
  modalBtn.style.setProperty('--color-btn', '#868686');
  modalBtn.style.setProperty('--color-hover', '#868686');
  }
}

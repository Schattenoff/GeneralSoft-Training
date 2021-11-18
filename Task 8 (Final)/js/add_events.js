let addModal = document.getElementById("myModal");
var addBtn = document.getElementById("openModal");
var addSpan = document.getElementsByClassName("close")[0];

addbtn.onclick = function() {
  addModal.style.display = "block";
}

addSpan.onclick = function() {
  addModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == addModal) {
    addModal.style.display = "none";
  }
}


let title = document.getElementById("title");
let date = document.getElementById("date");
let description = document.getElementById("description");
let modalBtn = document.querySelector('.modalBtn');

function generateEvents() {
  let db = new Database();
  let event = {
    title: title.value,
    date: date.value,
    description: description.value
  };
  db.onAddEventUser(event);
  title.value = "";
  date.value = "";
  description.value = "";
  modal.style.display = "none";
}



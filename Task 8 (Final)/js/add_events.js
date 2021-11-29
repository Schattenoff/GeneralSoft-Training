let addModal = document.getElementById("myModal");
let addBtn = document.getElementById("openModal");
let addSpan = document.getElementsByClassName("close")[0];

addBtn.onclick = function() {
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


function generateEvents(event) {
  event.preventDefault();
  let db = new Database();
  let events = {
    title: title.value,
    date: date.value,
    description: description.value
  };
  db.onAddEventUser(events);
  title.value = "";
  date.value = "";
  description.value = "";
  addModal.style.display = "none";
}



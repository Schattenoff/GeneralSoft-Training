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



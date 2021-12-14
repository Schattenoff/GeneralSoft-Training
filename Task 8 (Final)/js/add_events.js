let addModal = document.getElementById("myModal");
let addBtn = document.getElementById("openModal");
let addSpan = document.getElementsByClassName("close")[0];

addBtn.onclick = () => {
  addModal.style.display = "block";
}

addSpan.onclick = () => {
  addModal.style.display = "none";
}

window.onclick = (event) => {
  if (event.target == addModal) {
    addModal.style.display = "none";
  }
}


let title = document.getElementById("title");
let date = document.getElementById("date");
let description = document.getElementById("description");
let modalBtn = document.querySelector('.modalBtn');
helper.dateInputMasked(date);

function generateEvents(e) {
  e.preventDefault();
  console.log(helper.validateDate(date.value));
  if (helper.validateDate(date.value) == true && title.value != "") {
  let db = new Database();
  let events = {
    title: title.value,
    date: date.value,
    description: description.value
  };
  db.onAddEventUser(events);
  let calendar = new Calendar();
  calendar.renderCalendar();
  helper.message(true, "Event Add Complete!");
  title.value = "";
  date.value = "";
  description.value = "";
  addModal.style.display = "none";
  } else return helper.message(false, "No validate date");
}



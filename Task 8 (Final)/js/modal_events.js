let modalEvent = document.getElementById("myModalEvent");
var dayBtn = document.getElementById("dayBtn");
var span = document.getElementsByClassName("close")[0];
let onData = null;

let modalTitle = document.querySelector('.modal-titleEvent');
function openModal(i, month, year) {
  modalEvent.style.display = "block";
  modalTitle.textContent = `${createNumber(i)}.${createNumber(month)}.${year}`;
  onLoadEvents(`${createNumber(i)}.${createNumber(month)}.${year}`);
}

function closeModal() {
  modalEvent.style.display = "none";
  document.getElementsByClassName("container_events")[0].innerHTML = "";
}

function createNumber(i) {
  if (i < 10) {
    return i = `0${i}`;
  } else {
    return i;
  }
}

function onLoadEvents(data){
  let database = new Database();
  let events = database.onGetEvents();
  onData = data;
  for(let i = 0; i < events.length; i++){
    if(events[i].date == data){
      document.getElementsByClassName("container_events")[0].innerHTML += `<div class="event event_${i}" >${events[i].title}<span id="${i}" class="delete" onclick="openConfirm();">&times;</span></div>`
    }
  }
}

let modalConfirm = document.getElementById("myModalConfirm");

function openConfirm() {
  modalConfirm.style.display = "block";
}

function closeConfirm() {
  modalConfirm.style.display = "none";
}

function onDeleteEvent() {
  let database = new Database();
  database.onDeleteEventUser();
  document.getElementsByClassName('container_events')[0].remove();
  document.getElementsByClassName('event_modal')[0].innerHTML += "<div class='container_events'></div>";
  onLoadEvents(onData);
  modalConfirm.style.display = "none";
}



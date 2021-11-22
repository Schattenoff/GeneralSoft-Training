let modalEvent = document.getElementById("myModalEvent");
let dayBtn = document.getElementById("dayBtn");
let fnEvent = onLoadEvents();

let modalTitle = document.querySelector('.modal-titleEvent');
function openModal(i, month, year) {
  modalEvent.style.display = "block";
  modalTitle.textContent = `${helper.createNumber(i)}.${helper.createNumber(month)}.${year}`;
  fnEvent(`${helper.createNumber(i)}.${helper.createNumber(month)}.${year}`);
}

function closeModal() {
  modalEvent.style.display = "none";
  document.getElementsByClassName("container_events")[0].innerHTML = "";
}

function onLoadEvents() {
  let temp = null;
  return function(data){
    if(temp == null) temp = data;
    else data = temp;
    let database = new Database();
    let events = database.onGetEvents();
    for(let i = 0; i < events.length; i++){
      if(events[i].date == data){
        document.getElementsByClassName("container_events")[0].innerHTML += `<div class="event event_${i}" >${events[i].title}<span id="${i}" class="delete" onclick="openConfirm(${i});">&times;</span></div>`
      }
    }
    return temp;
  }
}

let modalConfirm = document.getElementById("myModalConfirm");

function openConfirm(id) {
  modalConfirm.style.display = "block";
  let initButtons = modalConfirm.getElementsByClassName('initButtons')[0];
  initButtons.innerHTML += `<button class="btn yes" onclick="onDeleteEvent(${id})">Yes</button>`;
  initButtons.innerHTML += `<button class="btn no" onclick="closeConfirm()">No</button>`;
}

function closeConfirm() {
  modalConfirm.style.display = "none";
  let initButtons = modalConfirm.getElementsByClassName('initButtons')[0];
  initButtons.innerHTML = '';
}

function onDeleteEvent(id) {
  let database = new Database();
  console.log(id)
  database.onDeleteEventUser(id);
  document.getElementsByClassName('container_events')[0].remove();
  document.getElementsByClassName('event_modal')[0].innerHTML += "<div class='container_events'></div>";
  let data = fnEvent();
  console.log(data);
  closeConfirm();
}



let modalEvent = document.getElementById("myModalEvent");
var dayBtn = document.getElementById("dayBtn");
var span = document.getElementsByClassName("close")[0];

let modalTitle = document.querySelector('.modal-titleEvent');
function openModal(i, month, year) {
  modalEvent.style.display = "block";
  modalTitle.textContent = `${createNumber(i)}.${createNumber(month)}.${year}`;
}

function closeModal() {
  modalEvent.style.display = "none";
}

function createNumber(i) {
  if (i < 10) {
    return i = `0${i}`;
  } else {
    return i;
  }
}
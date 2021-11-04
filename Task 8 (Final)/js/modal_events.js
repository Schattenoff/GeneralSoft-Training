let modalEvent = document.getElementById("myModalEvent");
var dayBtn = document.getElementById("dayBtn");
var span = document.getElementsByClassName("close")[0];

function test1() {
    modalEvent.style.display = "block";
}

function test2() {
  modalEvent.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modalEvent) {
    modalEvent.style.display = "none";
  }
}
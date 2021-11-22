
let calendar = new Calendar();
calendar.renderCalendar();

let userName = document.querySelector('.name');
let database = new Database();
userName.innerHTML = `Name: ${(database.onGetUserName(database.onGetUserID()))}`;
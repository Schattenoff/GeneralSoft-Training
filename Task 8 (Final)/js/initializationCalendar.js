let database = new Database();
if (database.onGetAuth() != true) {
    document.location.href = 'sign-in.html';
}  

let calendar = new Calendar();
calendar.renderCalendar();

let userName = document.querySelector('.name');
userName.innerHTML = `Name: ${(database.onGetUserName(database.onGetUserID()))}`;



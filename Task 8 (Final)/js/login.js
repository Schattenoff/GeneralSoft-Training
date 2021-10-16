let userName = document.getElementById('userName');
let regLogin = document.getElementById('regLogin');
let regPass = document.getElementById('regPass');

function userStorage() {
    localStorage.setItem('userName', userName.value);
    localStorage.setItem('regLogin', regLogin.value);
    localStorage.setItem('regPass', regPass.value);
}

function check_userStorage() {
    let loginStorage = localStorage.getItem('regLogin');
    let passStorage = localStorage.getItem('regPass');

    let login = document.getElementById('login');
    let pass = document.getElementById('pass');

    if (login.value !== loginStorage && pass.value !== passStorage) {
        alert("ERROR")
    } else {
        alert("Welcome!");
    }
}
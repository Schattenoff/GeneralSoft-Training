let regLogin = document.getElementById('regLogin');
let regPass = document.getElementById('regPass');

function userStorage() {
    let users = {
        'regLogin': regLogin.value,  
        'regPass': regPass.value
    }
    let user = JSON.parse(localStorage.getItem('users'));
    if (user == null) user = [];
    user.push(users);
    localStorage.setItem('users', JSON.stringify(user));
}

function check_userStorage() {
    let loginStorage = localStorage.getItem('regLogin');
    let passStorage = localStorage.getItem('regPass');

    let login = document.getElementById('login');
    let pass = document.getElementById('pass');
    
}
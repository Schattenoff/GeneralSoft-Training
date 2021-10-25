let regLogin = document.getElementById('userName');
let regLogin = document.getElementById('regLogin');
let regPass = document.getElementById('regPass');

function userStorage() {
    let users = {
        'userName': userName.value,
        'regLogin': regLogin.value,  
        'regPass': regPass.value
    }
    let user = JSON.parse(localStorage.getItem('users'));
    if (user == null) user = [];
    user.push(users);
    console.log(user);
    localStorage.setItem('users', JSON.stringify(user));
}


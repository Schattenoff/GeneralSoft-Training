let login = document.getElementById('login');
let pass = document.getElementById('pass');

function verify(email, password, id) {
    if (login.value == email && pass.value == password) {
        helper.message(true, 'You are successfully logged in!');
        localStorage.setItem("id", id);
        return helper.link('index.html');
    }
    else if (login.value == email && pass.value != password) {
        return helper.message(false, 'Wrong password!');
    }
    else return helper.message(false, 'User is not found!');
}

function login_user() {
    if (login.value == "" || pass.value == "") {
        return helper.message(false, 'You have empty fields!');
    } 
    let users = JSON.parse(localStorage.getItem('users'));
    for (let i = 0; i < users.length; i++) {    
        let regLogin = users[i].regLogin;
        let regPass = users[i].regPass;
        verify(regLogin, regPass, i); 
    }
}

function disableBack() { window.history.forward(); }
        setTimeout("disableBack()", 0);
        window.onunload = function () { null };


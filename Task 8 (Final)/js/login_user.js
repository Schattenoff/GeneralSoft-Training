let login = document.getElementById('login');
let pass = document.getElementById('pass');
let database = new Database();

function login_user() {
    if (login.value == "" || pass.value == "") {
        return helper.message(false, 'You have empty fields!');
    } 
    
    for (let i = 0; i < database.onGetLength(); i++) {    
        let regLogin = database.onGetLogin(i);
        let regPass = database.onGetPassword(i);
        verify(regLogin, regPass, i); 
    }
}

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
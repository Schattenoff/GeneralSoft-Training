let login = document.getElementById('login');
let pass = document.getElementById('pass');

function login_user() {
    if (login.value == "" || pass.value == "") {
        return helper.message(false, 'You have empty fields!');
    } 
    let users = JSON.parse(localStorage.getItem('users'));
    for (let i = 0; i < users.length; i++) {    
        let regLogin = users[i].regLogin;
        let regPass = users[i].regPass;
        if (login.value == regLogin && pass.value == regPass) {
            helper.message(true, 'You are successfully logged in!');
            localStorage.setItem("id",i);
            return helper.link('index.html');
        }
        else if (login.value == regLogin && pass.value != regPass) {
            return helper.message(false, 'Wrong password!');
        }
        else return helper.message(false, 'User is not found!');
    }

}
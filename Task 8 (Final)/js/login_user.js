let login = document.getElementById('login');
let pass = document.getElementById('pass');
let database = new Database();

function login_user(event) {
    event.preventDefault();
    if (login.value == "" || pass.value == "") {
        return helper.message(false, 'You have empty fields!');
    } 
    
    for (let i = 0; i < database.onGetLength(); i++) {    
        let regLogin = database.onGetLogin(i);
        let regPass = database.onGetPassword(i);
        helper.verify(regLogin, regPass, i); 
    }
}
let userName = document.getElementById('userName');
let regLogin = document.getElementById('regLogin');
let regPass = document.getElementById('regPass');

function userStorage(event) {
    event.preventDefault();
    
    if (userName.value == "" || regLogin.value == "" || regPass.value == "") {
       return helper.message(false, 'You have empty fields!');
    } 

    if (helper.validateEmail(regLogin.value) != true && helper.validatePass(regPass.value) != true ) {
        return helper.message(false, 'Email and password are not validated!');
    } else if (helper.validateEmail(regLogin.value) != true) {
        return helper.message(false, 'Email does not pass validation!');
    } else if (helper.validatePass(regPass.value) != true) {
        return helper.message(false, 'The password does not pass validation!');
    }

    let users = {
        'userName': userName.value,
        'regLogin': regLogin.value,  
        'regPass': regPass.value,
        'events':[],
        'auth': false,
    }

    let database = new Database();
    for (let i = 0; i < database.onGetLength(); i++) {
        if (database.onGetLogin(i) == regLogin.value) {
            helper.message(false, 'Email is Busy!');
        }
    }
    database.onInsertIntoDatabase(users);
    helper.message(true, 'You have successfully registered!');
}



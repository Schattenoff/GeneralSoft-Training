let userName = document.getElementById('userName');
let regLogin = document.getElementById('regLogin');
let regPass = document.getElementById('regPass');

function userStorage() {
    //Проверка на пустые поля
    if (userName.value == "" || regLogin.value == "" || regPass.value == "") {
       return helper.message(false, 'You have empty fields!');
    } 

    if (helper.validatePass(regPass.value) != true) {
        return helper.message(false, 'The password does not pass validation!');
    }

    let users = {
        'userName': userName.value,
        'regLogin': regLogin.value,  
        'regPass': regPass.value
    }

    let database = new Database();
    for (let i = 0; i < database.onGetLength(); i++) {
        if (database.onGetLogin(i) == regLogin.value) {
            return helper.message(false, 'Email is Busy!');
        }
    }
    
    database.onInsertIntoDatebase(users);
    helper.message(true, 'You have successfully registered!');
    helper.link('sign-in.html');
}



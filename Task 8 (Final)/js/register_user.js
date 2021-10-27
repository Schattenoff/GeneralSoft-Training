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

    let user = JSON.parse(localStorage.getItem('users'));
    if (user == null) user = [];
    for (let i = 0; i < user.length; i++) {
        if (user[i].regLogin == regLogin.value) {
            return helper.message(false, 'Email is Busy!');
        }
    }
    user.push(users);
    localStorage.setItem('users', JSON.stringify(user));
    helper.message(true, 'You have successfully registered!');
    helper.link('sign-in.html');
}



let userName = document.getElementById('userName');
let regLogin = document.getElementById('regLogin');
let regPass = document.getElementById('regPass');

function userStorage() {

    //Проверка на пустые поля
    if (userName.value == "" || regLogin.value == "" || regPass.value == "") {
       return alert('Ты дурак, напиши что-нибудь!!!');
    } 

    if (helper.validatePass(regPass.value) == true) {

    } else alert('Пароль не проходит валидацию');

    let users = {
        'userName': userName.value,
        'regLogin': regLogin.value,  
        'regPass': regPass.value
    }

    let user = JSON.parse(localStorage.getItem('users'));
    if (user == null) user = [];
    user.push(users);
    localStorage.setItem('users', JSON.stringify(user));
}



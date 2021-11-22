let helper = (function () {
    return {
        link: function(href) {
            setTimeout(()=>{
                document.location.href = href;
            },2500);
        },
        validatePass: function(pass) {
            let valpass = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9!%^&*$@]{6,}/g;
            if (valpass.test(pass) == true) {
                return true;
            }
        },
        validateEmail: function(email) {
            let valemail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/g;
            if (valemail.test(email) == true) {
                return true;
            }
        },
        message: function(type, sms) {
            let mes = document.querySelector('.message');
            let mes_title = document.querySelector('.message_title');
            let mes_text = document.querySelector('.message_text');
            if (type == false) {
                mes.style.display = 'inline';
                mes_title.textContent = 'Error';
                mes_title.style.setProperty('color','#e46562');
                mes_text.textContent = sms;
                setTimeout(()=>{
                    mes.style.display = 'none';
                },5000);
            } else {
                mes.style.display = 'inline';
                mes_title.textContent = 'Success';
                mes_title.style.setProperty('color','#4caf50');
                mes_text.textContent = sms;
                setTimeout(()=>{
                    mes.style.display = 'none';
                },5000);
            }
        },
        createNumber: function(i) {
            if (i < 10) {
              return i = `0${i}`;
            } else {
              return i;
            }
        },
        verify: function(email, password, id) {
            if (login.value == email && pass.value == password) {
                helper.message(true, 'You are successfully logged in!');
                database.onSetUserID(id);
                return helper.link('index.html');
            }
            else if (login.value == email && pass.value != password) {
                return helper.message(false, 'Wrong password!');
            }
            else return helper.message(false, 'User is not found!');
        },
        dateInputMasked: function(elm) {
                elm.addEventListener('keypress', function(e) {
                  if(e.keyCode < 47 || e.keyCode > 57) {
                    e.preventDefault();
                  }
                  
                  var len = elm.value.length;
                  
                  // If we're at a particular place, let the user type the slash
                  // i.e., 12/12/1212
                  if(len !== 1 || len !== 3) {
                    if(e.keyCode == 47) {
                      e.preventDefault();
                    }
                  }
                  
                  // If they don't add the slash, do it for them...
                  if(len === 2) {
                    elm.value += '.';
                  }
              
                  // If they don't add the slash, do it for them...
                  if(len === 5) {
                    elm.value += '.';
                  }
                });
        },
    }
})();
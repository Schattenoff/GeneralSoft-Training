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
                helper.link('index.html');
            }
            else if (login.value == email && pass.value != password) {
                helper.message(false, 'Wrong password!');
            }
            else helper.message(false, 'User is not found!');
        },
        validateDate: function(date) {
            let dateFormat = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;
            return dateFormat.test(date);
        },
        dateValueMasked: function() {
            let date = document.getElementById("date");
            date.value = "__.__.____";
            date.setSelectionRange(0, 0);
        },
        dateInputMasked: function(elm) {
                elm.addEventListener('keypress', function(e) {
                  if(e.keyCode < 47 || e.keyCode > 57) {
                    e.preventDefault();
                  }
                  let len = elm.value.length;
                  if(len !== 1 || len !== 3) {
                    if(e.keyCode == 47) {
                      e.preventDefault();
                    }
                  }
                  if(len === 2) {
                    elm.value += '.';
                  }
                  if(len === 5) {
                    elm.value += '.';
                  }
                });
        },
        datePoint: function(date) {
            let pointDay = String(date).slice(0,2);
            let pointMonth = String(date).slice(3,5);
            let pointYear = String(date).slice(6,10);
            let pointDisplay = document.getElementById(`point_${+pointDay}_${+pointMonth}_${pointYear}`);
            // pointDisplay.style.display = 'none';
            pointDisplay.style.display = 'block';
        }
    }
})();
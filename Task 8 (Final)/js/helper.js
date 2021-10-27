let helper = (function () {
    return {
        link: function(href) {
            setTimeout(()=>{
                document.location.href = href;
            },3500);
        },
        validatePass: function(pass) {
            let valpass = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9!%^&*$@]{6,}/g;
            if (valpass.test(pass) == true) {
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
        }
    }
})();
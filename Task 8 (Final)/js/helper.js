let helper = (function () {
    return {
        link: function(href) {
            console.log('gwreger');
            document.location.href = href;
        },
        validatePass: function(pass) {
            let valpass = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9!%^&*$@]{6,}/g;
            if (valpass.test(pass)) {
                return true;
            }
        }
    }
})();
'use strict';

let email = prompt('Введіть вашу електронну пошту');
let password = prompt('Введіть ваш пароль');
let isEmailVerified = confirm('Електронна пошта підтвержена?');
let canLogin = null;
if (email.trim().length > 0 && password.trim().length > 0 && isEmailVerified) {
    canLogin = true;
}
else{
    canLogin = false;
}
if(canLogin){
    console.log('Логін успішний')
}
else{
    console.log("Перевірте дані")
}

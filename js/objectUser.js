'use strict';
console.log('objectUser---------')
//1 TASK -------------------
let user = {
    name: prompt('Як до вас звертатися?'),
    age: Number(prompt('Скільки вам років?')),
    email: prompt('Введіть вашу електронну пошту'),
    isSubscribed: confirm('В вас є підписка?'),
    balance: prompt('Який у вас баланс?'),
    verified: prompt('Ваш акаунт підтверджено? Введіть 1 якщо так або 0 якщо акаунт не підтверджено.')
}
let userFinalAccess = null;
let balance = parseFloat(user.balance);
let verified = user.verified === "1";

if(user.age >= 18 && verified &&(user.isSubscribed || balance > 0 )) {
    console.log('Доступ дозволено')
    userFinalAccess = true;
}
else{
    userFinalAccess = false;
    console.log('Доступ заборонено');
}

let comparison = user.age == user.age.toString();
let comparisonStrict = user.age === user.age.toString();
console.log(comparison);
console.log(comparisonStrict);

let young = null;
if(user.age < 18){
    young = "Access restricted due to age";
}





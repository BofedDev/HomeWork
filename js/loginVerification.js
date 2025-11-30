'use strict';


let hasPromoCode = confirm('В вас є промокод?');
let isBlackFriday = confirm('Сьогодні Black Friday?');
let cartTotal = prompt('Яка сума в кошикy?');
if (!!cartTotal.trim() === false) {
    alert('Ви нічого не ввели');
    cartTotal = prompt('Введіть коректну суму')
}
cartTotal = +cartTotal;
if (isNaN(cartTotal) || cartTotal < 0) {
    alert('Ви ввели некоректну суму')
}

let isDiscountApplied = null;
if ((hasPromoCode || isBlackFriday) && cartTotal >= 100) {
    isDiscountApplied = true;
}
else{
    isDiscountApplied = false;
}
if (isDiscountApplied){
    console.log("Знижка застосована");
}
else{
    console.log("Знижка не застосована");
}
let noDiscount = !isDiscountApplied;
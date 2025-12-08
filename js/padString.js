'use strict';

let str = prompt('Введіть якесь повідомлення');
let num = Number(prompt('Введіть кількість символів які ви хочете щоб було в вашого повідомлення'));
let symbol = prompt('Введіть один символ який буде додаватися до вашого повідомлення якщо ви ' +
    'ввели число більше за кількість символів в вашому повідомленні');
let bool = prompt('Введіть false якщо хочете щоб символи яких невисточає виводилися зліва або true якщо з правої.' +
    '(за замовчуванням праворуч)')

const errorNum = function (value){
    if(typeof value !== 'number' || isNaN(value)){
        return 'Введіть валідне число'
    }
    else{
        return null;
    }
}

const errorString = function (value){
    if(value.trim().length === 0){
        return 'Введіть якісь данні ви ввели пусту строку'
    }
    else{
        return null;
    }

}
const padString = function(str, num, symbol, bool){

    if(num > str.length){
        if(bool === 'false'){
            str = str.padStart(num, symbol);
        }
        else {
            str = str.padEnd(num, symbol);
        }

    }
    else{
        if(bool === 'false'){
            str = str.substring(str.length - num, str.length)
        }
        else {
            str = str.substring(0, num);
        }

    }
    return str;
}
if(errorNum(num)){
    console.log(errorNum(num))
}
else if(errorString(str)){
    console.log(errorString(str))
}
else if(num > str.length && symbol.trim().length === 0){
    console.log('Помилка ви ввели число більше за строку але нічим її не заповнили')
}
else{
    console.log(padString(str, num, symbol, bool))
}


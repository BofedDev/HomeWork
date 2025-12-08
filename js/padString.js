'use strict';

let message = prompt('Введіть якусь строку.');
let item = Number(prompt('Який елемент цієї строки ви хочете видалити?'));
const removeElement = function(arr, item) {
    arr.splice(item - 1, 1);
    return arr;
}//The second option is without splice and indexOf
/*
    const removeElement = function(arr, item){
    for(let i = 0; i < message.length; i++) {
        if(i !== item - 1){
            arr.push(message[i]);
        }
    }
    return arr;
    }
*/
const errorNum = function (value){
    if(typeof value !== 'number' || isNaN(value)){
        return 'Введіть валідне число.'
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

if(errorNum(item)){
    console.log(errorNum(item))
}
else if(errorString(message)){
    console.log(errorString(message))
}
else if(item > message.length || item < 1){
    console.log('Ви ввели індекс більший за кількість символів в рядку який ви прислали або індекс менший за одиницю')
}
else{
    const array = [];
    for(let i = 0; i < message.length; i++) {
        array.push(message[i]);
    }
    removeElement(array, item);
    console.log(array);
}


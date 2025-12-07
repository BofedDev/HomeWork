'use strict';

let characters = prompt('Введіть будь яке повідомлення.');
let charactersLength = Number(prompt('Введіть кількість рандомних символів які ви бажаєте отримати з вашого повідомлення.'))
const key = function (length, char) {
    let result = '';
    for (let i = 0; i < length; i++) {
        let random = Math.floor(Math.random()*char.length);
        result += char[random];
    }
    return result;
}
console.log(key(charactersLength, characters));
'use strict';

let a = prompt('Введіть число а');
let originalA = Number(a);
let b = Number(prompt('Введіть число b'));
//1
console.log(Number(a) === 0? 'Вірно' : 'Неправильно');
//2
console.log(Number(a) > 0? 'Вірно' : 'Невірно');
//3
console.log(Number(a) < 0? 'Вірно' : 'Невірно');
//4
console.log(Number(a) >= 0? 'Вірно' : 'Неправильно');
//5
console.log(Number(a) <= 0? 'Вірно' : 'Неправильно');
//6
console.log(Number(a) !== 0? 'Вірно' : 'Невірно');
//7
console.log(a === 'test' ? 'Вірно' : 'Неправильно');
//8
console.log(a === '1' ? 'Вірно' : 'Невірно')
//9
a = Number(a);
console.log(a > 0 && a < 5? 'Вірно' : 'Невірно');
//10
console.log(a === 2 || a === 0 ? a += 7: a /= 10);
//11
a = originalA;
console.log(a <= 1 && b >= 3 ? a + b : a - b);
//12
console.log(a > 2 && a < 11 || b >= 6 && b < 14 ? 'Вірно' : 'Невірно');
//13
let result = null;
let num = Number(prompt('Введіть число від 1 до 4 включно'));
switch (num){
    case 1:
        result = 'Зима';
        break;
    case 2:
        result = 'Весна'
        break;
    case 3:
        result = 'Літо'
        break;
    case 4:
        result = 'Осінь'
        break;
}
console.log(result);
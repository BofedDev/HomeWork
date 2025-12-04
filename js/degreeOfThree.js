'use strict';
let e = Number(prompt('Введіть число'));
let examination = false;
for (let i = 1; i <= e; i*= 3) {
    if (i === e){
        console.log('Число можливо отримати возводячи 3 в ступінь');
        examination = true;
        break;
    }
}
examination === false ? console.log('Число неможливо отримати возводячи 3 в ступінь') : '';
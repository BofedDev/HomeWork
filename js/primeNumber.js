'use strict';
let d = Number(prompt('Введіть число'))
for (let i = 2; i < d; i++) {
    if( d % i === 0){
        console.log('Число не є прростим')
        break;
    }
    else{
        if(i === d - 1){
            console.log('Число є прростим')
        }
    }
}
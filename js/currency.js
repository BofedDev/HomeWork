'use strict';

let dollar = 27;
let b = [];
for(let i = 10; i <= 100; i+= 10){
    b.push(dollar * i);
}
console.log(b.join(' '));
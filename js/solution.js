'use strict';
const ul = document.body.firstElementChild;
let value = 0;
const arr = [];
for(let element of ul.children) {
    console.log(element);
    value += 1;
    arr.push(element.innerHTML);
}
console.log(`Кількість елементів = ${value}`);
console.log(arr);
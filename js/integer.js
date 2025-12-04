'use strict';
let n = Number(prompt('Введіть ціле число'));
let c = [];
for (let i = 1; i**2 <= n; i++) {
    c.push(i);
}
console.log(c.join(' '));
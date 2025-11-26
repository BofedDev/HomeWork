'use strict';

let age = prompt('Скільки вам років?');

if (age === null  || age.trim() === '') {
    alert('Некоректний вік')
}
age = +age;
if (isNaN(age) || age <= 0) {
    alert('Некоректний вік')
}
else{
    alert(`Через 5 років вам буде: ${age + 5}`)
}
// Second task
const price1 = "120.50$";
const price2 = "UAH 999";

const height = "180cm";
const broken = "abc123";

console.log('parseInt')
console.log(parseInt(price1));
//returns before the point
console.log(parseInt(price2));
//returns NaN because there are no numbers before the letters returns to the point
console.log(parseInt(height));
//displays up to letters
console.log(parseInt(broken));
//returns NaN because there are no numbers before the letters
console.log('parseFloat')
console.log(parseFloat(price1));
//reads before and after the period
console.log(parseFloat(price2));
//returns NaN because there are no numbers before the letters
console.log(parseFloat(height));
//returns to letters
console.log(parseFloat(broken));
//returns NaN because there are no numbers before the letters



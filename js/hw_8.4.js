'use strict';
console.log('hw_8 task 4');
const cart = [
    { title: "Book", price: 200, qty: 2 },
    { title: "Laptop", price: 30000, qty: 1 }
];
let totalPrice = (cart[0].price * cart[0].qty + cart[1].price * cart[1].qty);
console.log(`Товарів в масиві на таку суму: ${totalPrice}`);
const updatedCart = [
    { title: "Pen", price: 20, qty: 5 }
];

let itemNames = (`Назви товарів з масивів: ${cart[0].title}, ${cart[1].title}, ${updatedCart[0].title}`);
console.log(itemNames);
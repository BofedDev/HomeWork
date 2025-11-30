'use strict';
console.log('object order-----------')
let order = {
    total: prompt('Введіть суму замовлення'),
    currency: prompt('Яка в вас валюта'),
    isPaid: confirm('Ви сплатили замовлення?'),
    delivery: prompt('Замовлення доставлено?Введіть так якщо доставленно або ні якщо не доставлено.'),
    priority: prompt('Замовлення приоритетне?Введіть 1 якщо так або 0 якщо ні.')
}


let delivery = null;
if (order.delivery.trim().toLowerCase() === 'так') {
    delivery = true;
}
else{
    delivery = false;
}
let priority = null;
let bigOrder = null;
let isPriority = null;
let isDelivery = null;
let numberTotal = Number(order.total);
if(order.priority.trim() === '1'){
    priority = true;
}
else{
    priority = false;
}
if(Number(order.total) > 1000){
    bigOrder = 'High-value';
}
else{
    bigOrder = '';
}
if(delivery){
    isDelivery = 'paid order with delivery.';
}
else{
    isDelivery = 'paid order without delivery.';
}
if(priority){
    isPriority = '[PRIORITY]'
}
else{
    isPriority = ''
}

let description = `${bigOrder} ${isDelivery} ${isPriority}`;
if (order.isPaid === false) {
    console.log("Order is not paid")
}
else{
    console.log(description)
}

let totalComparison = order.total == numberTotal;
let totalComparisonStrict = order.total === numberTotal;
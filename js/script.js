'use strict';
console.log('finalAccess ---------')
//1 TASK -------------------
let user = {
    name: prompt('Як до вас звертатися?'),
    age: Number(prompt('Скільки вам років?')),
    email: prompt('Введіть вашу електронну пошту'),
    isSubscribed: confirm('В вас є підписка?'),
    balance: prompt('Який у вас баланс?'),
    verified: prompt('Ваш акаунт підтверджено? Введіть 1 якщо так або 0 якщо акаунт не підтверджено.')
}
let userFinalAccess = null;
let balance = parseFloat(user.balance);
let verified = user.verified === "1";

if(user.age >= 18 && verified &&(user.isSubscribed || balance > 0 )) {
    console.log('Доступ дозволено')
    userFinalAccess = true;
}
else{
    userFinalAccess = false;
    console.log('Доступ заборонено');
}

let comparison = user.age == user.age.toString();
let comparisonStrict = user.age === user.age.toString();
console.log(comparison);
console.log(comparisonStrict);

let young = null;
if(user.age < 18){
    young = "Access restricted due to age";
}


//2 TASK -----------------
console.log('object order-----------')
let order = {
    total: prompt('Введіть суму замовлення'),
    currency: prompt('Яка в вас валюта'),
    isPaid: confirm('Ви сплатили замовлення?'),
    delivery: prompt('Замовлення потребує доставку?Введіть так якщо потребує або ні якщо не потребує.'),
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

let orderFinalAccess = null;
if(balance >= numberTotal || order.isPaid){
    orderFinalAccess = true;
}
else{
    orderFinalAccess = false;
}
//3 TASK -------------------
console.log('object systemSettings-----------')
let systemSettings = {
    darkMode: confirm('Темна тема увымкнена?'),
    fontSize: prompt('Який в вас розмір тексту?(Введіть число,наприклад 18.'),
    language: prompt('Оберіть мову,напишіть en якщо бажаєте англійську або uk якщо бажаєте укрїнську.'),
    betaAccess: prompt('В вас бета доступ?Напишіть true якщо так або false якщо ні')
}
let darkMode = systemSettings.darkMode;
let language = null;
let fontSize = null;
let betaAccess = null;
let isLargeFont = null;
if (Number(systemSettings.fontSize.trim()) >= 18) {
    isLargeFont = true;
}
else{
    isLargeFont = false;
}
// the text is large?
if(Number(systemSettings.fontSize.trim()) > 12){
    fontSize = true;
}
else{
    fontSize = false;
}
//font size more than 12?
if(systemSettings.language.trim().toLowerCase() === "en" || systemSettings.language.trim().toLowerCase() === "uk"){
    language = true;
}
else{
    language = false;
}
// language is valid?
if(systemSettings.betaAccess.trim().toLowerCase() === "true"){
    betaAccess = ' (Beta tester)';
}
else{
    betaAccess = '';
}
//is this a beta test?

if(darkMode && isLargeFont){
    console.log(`Dark mode + large font ${betaAccess}`);
}
else if(darkMode){
    console.log("Dark mode");
}
else if(isLargeFont){
    console.log('Large font')
}
else{
    console.log('Default settings');
}
let systemSettingsFinalAccess = null;
if(language &&fontSize){
    systemSettingsFinalAccess = true;
}
else{
    systemSettingsFinalAccess = false;
}
//4 TASK -------------------
console.log('finalAccess-----------------')
let finalAccess = null;
if(userFinalAccess && orderFinalAccess && systemSettingsFinalAccess){
    finalAccess = true;
    console.log("Full access granted");
}
else{
    finalAccess = false;
    console.log("Access denied");
}
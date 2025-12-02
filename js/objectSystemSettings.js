'use strict';
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
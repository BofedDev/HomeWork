'use strict';

let age = Number(prompt("How old are you?"));
if(isNaN(age)){
    age = Number(prompt("Enter the correct age"));
}
let name = prompt("What is your name?");
let userLocation = prompt("Where do you live?");
let loveJavaScript = prompt('Do you like JavaScript?');
let userAnswer = null;
if(loveJavaScript === 'так' || loveJavaScript === 'Так' || loveJavaScript === 'ТАК') {
    userAnswer = "love";
}
else{
    userAnswer = "don't like it";
}
alert(`Hello, ${name}! You are ${age} years old, From the city of ${userLocation}. Setting to JavaScript: ${userAnswer}.`);


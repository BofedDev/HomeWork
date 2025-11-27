'use strict';
console.log('hw_8 task 3');

const people = [
{ name:"Anna", age: 22 },
{ name: "Oleg", age: 31 },
{ name: "Maria", age: 27 }
];

let firstPersonName = people[0].name;
let oldest = null;
if (people[0].age > people[1].age && people[0].age > people[2].age) {
    oldest = people[0].age;
}
else if(people[1].age > people[0].age && people[1].age > people[2].age){
    oldest = people[1].age;
}
else if(people[2].age > people[0].age && people[2].age > people[1].age){
    oldest = people[2].age;
}
console.log(firstPersonName , oldest);
let total = (people[0].age + people[1].age + people[2].age);
let ageSummary = {
    total: total,
    average: parseInt((total) / 3)
}
console.log(`Середній вік: ${ageSummary.average} , сумарний вік: ${ageSummary.total}`);

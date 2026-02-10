'use strict';
import Student from './studentClass.js';

let student1 = new Student('Bogdan', 'Sklyarov', 2006);
let student2 = new Student('Vasya', 'Pirus', 2005);
let student3 = new Student('Vitya', 'Pirat', 2004);
console.log(student1);
console.log('Вік:', student1.getAge());

student1.present();
student1.present();
student1.absent();
student1.mark(100);
student1.mark(90);

console.log('Середній бал:', student1.getAverageMark());
console.log(student1.summary());

console.log('----------------------------------');
student2.present();
student2.absent();
student2.mark(52);
student2.mark(42);
console.log('Середній бал:', student2.getAverageMark());
console.log(student2.summary());

console.log('----------------------------------');
student3.present();
student3.present();
student3.mark(70);
student3.mark(100);
console.log('Середній бал:', student3.getAverageMark());
console.log(student3.summary());
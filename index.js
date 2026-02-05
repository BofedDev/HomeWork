'use strict';

function Student(firstName, lastName, age) {
    this.visits = [];
    this.grade = [];
    this.name = `${firstName} ${lastName}`;
    this.age = age;

}
//visit massive**

//present
Student.prototype.present = function () {
    if (this.visits.length < 10) {
        this.visits[this.visits.length] = true;
    } else {
        console.warn('Максимальна кількість візитів 10.');
    }
}
//absent
Student.prototype.absent = function () {
    if (this.visits.length < 10) {
        this.visits[this.visits.length] = false;
    } else {
        console.warn('Максимальна кількість візитів 10.');
    }
}

//grade massive**


//mark
Student.prototype.mark = function (rate) {
    if (this.grade.length < 10) {
        if (this.visits.length > this.grade.length) {
            if (this.visits[this.grade.length] !== false) {
                if (rate >= 0 && rate <= 10) {
                    this.grade[this.grade.length] = rate;
                } else {
                    console.warn('Невірна оцінка');
                }
            } else {
                console.warn('Учень відсутній в цей день.');
            }
        } else {
            console.warn('Спочатку заповніть присутність');
        }
    } else {
        console.warn('Максимальна кількість оцінок 10.');
    }
}

// summary method
Student.prototype.summary = function () {
    let avgVisitsSum = 0;
    for (let i = 0; i < this.visits.length; i++) {
        if (this.visits[i] === true) {
            avgVisitsSum++;
        }
    }
    let avgVisits = avgVisitsSum / this.visits.length;

    let avgGradeSum = 0;
    for (let i = 0; i < this.grade.length; i++) {
        avgGradeSum += this.grade[i];
    }
    let avgGrade = avgGradeSum / this.grade.length;

    if (avgGrade >= 9 && avgVisits >= 0.9) {
        console.log('Ух ти, який молодчинка!');
    } else if (avgGrade >= 9 || avgVisits >= 0.9) {
        console.log('Нормально, але можна краще');
    } else {
        console.log('Редька!');
    }
}

//getAge method
Student.prototype.getAge = function () {
    console.log(`Поточному студенту ${this.age} років`);
}

let student1 = new Student('Bogdan', 'Sklyarov', 19);
let student2 = new Student('Vasya', 'Brad', 52);
let student3 = new Student('Nikita', 'Gangsta', 12);

console.log(student1);
student1.present();
student1.present();
student1.mark(9);
student1.summary();
console.log(student2);
student2.present();
student2.absent();
student2.mark(7);
student2.summary();

console.log(student3);
student3.absent();
student3.absent();
student3.mark(7);
student3.summary();


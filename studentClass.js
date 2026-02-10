'use strict';

class Student {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.arrMarks = new Array(25).fill(undefined);
        this.arrVisits = new Array(25).fill(undefined);
    }

    // AvgMark Method
    getAverageMark() {
        let avgMarks = 0;
        let count = 0;

        for (let i = 0; i < this.arrMarks.length; i++) {
            if (this.arrMarks[i] !== undefined) {
                avgMarks += this.arrMarks[i];
                count++;
            } else {
                break;
            }
        }

        return count > 0 ? avgMarks / count : 0;
    }

    // GetAge method
    getAge() {
        return new Date().getFullYear() - this.birthYear;
    }

    // Mark method
    mark(mark) {
        const markId = this.arrMarks.findIndex(el => el === undefined);

        if (markId === -1) {
            console.warn('Всі оцінки вже виставлені!');
            return;
        }

        if (this.arrVisits[markId] === true) {
            if (mark >= 0 && mark <= 100) {
                this.arrMarks[markId] = mark;
            }
            else{
                console.warn('Діапазон оцінок 0 - 100 балів.')
            }
        } else {
            console.warn('Учень відсутній в цей день, неможливо поставити оцінку!');
        }
    }

    // Present method
    present() {
        const visitId = this.arrVisits.findIndex(el => el === undefined);

        if (visitId === -1) {
            console.warn('Масив відвідуваності заповнений!');
            return;
        }

        this.arrVisits[visitId] = true;
    }

    // Absent method
    absent() {
        const visitId = this.arrVisits.findIndex(el => el === undefined);

        if (visitId === -1) {
            console.warn('Масив відвідуваності заповнений!');
            return;
        }

        this.arrVisits[visitId] = false;
    }

    // Summary method
    summary() {
        const avgMarks = this.getAverageMark();
        let countVisits = 0;
        let countPresent = 0;

        for (let i = 0; i < this.arrVisits.length; i++) {
            if (this.arrVisits[i] !== undefined) {
                countVisits++;
                if (this.arrVisits[i] === true) {
                    countPresent++;
                }
            } else {
                break;
            }
        }

        const avgVisits = countVisits > 0 ? countPresent / countVisits : 0;

        if (avgMarks >= 90 && avgVisits >= 0.9) {
            return 'Молодець!';
        } else if (avgMarks >= 90 || avgVisits >= 0.9) {
            return 'Добре, але можна краще';
        } else {
            return 'Редиска!';
        }
    }
}

export default Student;

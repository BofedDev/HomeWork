'use strict';

const user = {
    lockProfile(){
        console.log('До lockProfile - sealed:', Object.isSealed(this));
        Object.seal(this);
        console.log('Після lockProfile - sealed:', Object.isSealed(this));
        return this;
    },

    lockHard(){
        console.log('Після lockHard - frozen:', Object.isFrozen(this));
        return Object.freeze(this);
    },

    _firstName: '',

    _lastName: '',

    get fullName () {
        return this._firstName + ' ' + this._lastName;
    },

    set fullName (value) {
        const parts = value.trim().split(' ');

        if(typeof value !== 'string' || parts.length < 2) {
            throw new Error("Повне ім'я повинне мати мінімум 2 слова!")
        }

        for (let i = 0; i < parts.length; i++) {
            if(parts[i].length < 2) {
                throw new Error("Ім'я та фамілія повинні мати мінімум по 2 символи!");
            }
        }

        this._firstName = parts[0];
        this._lastName = parts[1];
        Object.defineProperty(this, 'createdAt', {
            value: new Date(),
            writable: false,
            configurable: false,
            enumerable: true
        });

    }
}

Object.defineProperty(user, '_firstName', { enumerable: false });
Object.defineProperty(user, '_lastName',   { enumerable: false });
Object.defineProperty(user, 'fullName', { configurable: false, enumerable: true });

user.fullName = 'Bogdan Sklyarov';

console.log('Дескриптори:', Object.getOwnPropertyDescriptors(user));

user.lockProfile();
console.log('isSealed:', Object.isSealed(user));

//Error ------------
console.log('Error start')
user.newField = 'test';
console.log('newField додалось?', 'newField' in user);

user.createdAt = new Date('2014-12-04');
console.log('createdAt змінився?', user.createdAt);

delete user.fullName;
console.log('fullName існує?', 'fullName' in user);
//Error ------------

// Comparison

console.log('Спроба змінити _firstName після seal:');
user._firstName = 'Petro';
console.log('_firstName тепер:', user._firstName);
console.log('fullName тепер:', user.fullName);

console.log('lockHard');
user.lockHard();

console.log('Спроба змінити _firstName після freeze:');
const oldName = user._firstName;
user._firstName = 'Vasyl'; // Error

console.log('Висновок');
console.log('seal: можна змінювати існуючі властивості');
console.log('freeze: не можна змінювати нічого.');

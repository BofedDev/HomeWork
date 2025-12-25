'use strict';
console.log('Call---------------');

let call = function(func, context, ...args) {
    if (context === null || context === undefined) context = globalThis;
    context.tempKey = func;
    const result = context.tempKey(...args);
    delete context.tempKey;
    return result;
}

const user = {
    name: 'Олександр',
    age: 28,
    city: 'Київ',
    showInformation: function(name, age, city){
        return (`Name: ${this.name}, age: ${this.age}, city: ${this.city}`);
    }
};

const anotherUser = {
    name: 'Олена',
    age: 25,
    city: 'Львів'
};

console.log(call(user.showInformation, anotherUser));
'use strict';
console.log('Filter---------------');

const users = [
    { id:  1, age: 17, active: true, email: "a@mail.com" },
    { id: 2, age: 22, active: true, email: "b@spam.com" },
    { id: 3, age: 30, active: false, email: "c@mail.com" },
    { id: 4, age: 35, active: true, email: "d@mail.com" },
    { id: 5, age: 40, active: true, email: "e@mail.com" },
];

let filter = function(arr){
    let result = [];
    for(let i=0; i<arr.length; i++){
        let emailCheck = null;
        if(arr[i].email.slice(-9) !== '@spam.com'){
            emailCheck = true;
        }
        else{
            emailCheck = false;
        }

        if(arr[i].age >= 18 && arr[i].age <= 35 && arr[i].active === true && emailCheck){
            result.push(arr[i]);
        }
    }
    return result;

}
console.log(filter(users));
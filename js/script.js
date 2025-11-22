'use strict';


let age = prompt('Enter your age');
let ageTypeNumber = (+age);
if(age === null || age === "") {
    alert('Age not specified');
}
else if (!isNaN(ageTypeNumber) && ageTypeNumber < 18) {
    let childWithAdult = confirm('You are under 18. Is there an adult with you who allows viewing?');
    if (childWithAdult) {
        alert('Access is permitted with the permission of an adult.')
    } else {
        alert('Access is denied')
    }
}
    else if(ageTypeNumber >= 18){
        alert('Access is allowed. Enjoy your viewing!')
    }
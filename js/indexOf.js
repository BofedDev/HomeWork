'use strict';
console.log('indexOF');
const indexOf = function(arr, element) {
    for(let i = 0; i < arr.length; i++) {
        if(element === arr[i]) {
            return i;
        }
    }
    return null;
}
let task = demoArray[7];
console.log(indexOf(demoArray, task));
console.log(task);
console.log('-------------------');
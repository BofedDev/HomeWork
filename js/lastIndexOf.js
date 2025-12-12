'use strict';
console.log('lastIndexOF');
const lastIndexOf = function(arr, element) {
    for(let i = arr.length - 1; i >= 0; i--) {
        if(element === arr[i]) {
            return i;
        }
    }
    return null;
}
console.log(lastIndexOf(demoArray, task));

console.log('-------------------');
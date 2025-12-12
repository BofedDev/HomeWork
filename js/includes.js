'use strict';
console.log('includes');
const includes = function(arr, element) {
    for(let i = 0; i < arr.length; i++) {
        if(element === arr[i]) {
            return true;
        }
    }
    return false;
}

console.log(includes(demoArray, demoArray[7]));
console.log('-------------------');
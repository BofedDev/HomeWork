'use strict';
console.log('findIndex')
const findIndex = function(arr, callback) {
    for(let i = 0; i < arr.length; i++) {
        if(callback(arr[i], i, arr)) {
            return i;
        }
    }
    return null;
}

console.log(findIndex(demoArray, (item) => item.title === 'et porro tempora'));
console.log(findIndex(demoArray, (item) => item.id === 1));
console.log('-------------------');
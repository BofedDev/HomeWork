'use strict';
console.log('FIND');
const find = function(arr, callback) {
    for(let i = 0; i < arr.length; i++) {
        if(callback(arr[i], i, arr)) {
            return arr[i];
        }
    }
    return undefined;
}

console.log(find(demoArray, (item) => item.title === 'et porro tempora'));
console.log(find(demoArray, (item) => item.id === 1));
console.log('-------------------');
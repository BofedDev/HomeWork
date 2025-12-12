'use strict';
console.log('SOME');
const some = function(arr, element) {
    for(let i = 0; i < arr.length; i++) {
        if(element(arr[i], i, arr)) {
            return arr[i];
        }
    }

    return undefined;
}

console.log(some(demoArray, (item) => item.id % 2 !== 0));

console.log('-------------------');


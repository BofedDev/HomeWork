'use strict';
console.log('every');
const every = function(arr, element) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        if(element(arr[i], i, arr)) {
            result[result.length] = arr[i];
        }
    }

    return result;
}

console.log(every(demoArray, (item) => item.id % 2 === 0));

console.log('-------------------');


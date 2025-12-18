'use strict';
console.log('ArrayReverse--------------------')
const array2 = [1, 2, 3, 4, 5, 6, 7, 8];

let arrayReverse = function (arr){
    for (let start = 0, end = arr.length - 1; start < end; start ++, end--) {
        let tempValue = arr[start];
        arr[start] = arr[end];
        arr[end] = tempValue;
    }
    return arr;
}
console.log(arrayReverse(array2));







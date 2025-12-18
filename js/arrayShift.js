'use strict';
console.log('ArrayShift')
const array = [1, 2, 3, 4, 5, 6, 7];

let arrayShift = function (arr){
    let tempArr = arr[0];
        for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i + 1];
    }
    arr.length = arr.length - 1;
    return tempArr;
}
console.log(arrayShift(array));

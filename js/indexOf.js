'use strict';
console.log('indexOF');
/**
 * Находит индекс первого вхождения элемента в массиве
 * @param {Array} arr - Массив для поиска
 * @param {*} element - Элемент, который нужно найти
 * @returns {number} Индекс первого вхождения элемента или -1, если элемент не найден
 */
const indexOf = function(arr, element) {
    for(let i = 0; i < arr.length; i++) {
        if(element === arr[i]) {
            return i;
        }
    }
    return -1;
}
let task = demoArray[7];
console.log(indexOf(demoArray, task));
console.log(indexOf(demoArray, demoArray[3]));

console.log('-------------------');
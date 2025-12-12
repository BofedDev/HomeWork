'use strict';
console.log('lastIndexOF');
/**
 * Находит индекс последнего вхождения элемента в массиве
 * @param {Array} arr - Массив для поиска
 * @param {*} element - Элемент, который нужно найти
 * @returns {number} Индекс последнего вхождения элемента или -1, если элемент не найден
 */
const lastIndexOf = function(arr, element) {
    for(let i = arr.length - 1; i >= 0; i--) {
        if(element === arr[i]) {
            return i;
        }
    }
    return -1;
}
console.log(lastIndexOf(demoArray, task));
console.log(lastIndexOf(demoArray, demoArray[2]));

console.log('-------------------');
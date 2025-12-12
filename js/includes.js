'use strict';
console.log('includes');
/**
 * Проверяет, содержится ли элемент в массиве
 * @param {Array} arr - Массив для проверки
 * @param {*} element - Элемент, наличие которого нужно проверить
 * @returns {boolean} true если элемент найден, иначе false
 */
const includes = function(arr, element) {
    for(let i = 0; i < arr.length; i++) {
        if(element === arr[i]) {
            return true;
        }
    }
    return false;
}

console.log(includes(demoArray, demoArray[7]));
console.log(includes(demoArray, demoArray[5]));
console.log('-------------------');
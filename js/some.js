'use strict';
console.log('SOME');
/**
 * Проверяет, есть ли хотя бы один элемент массива, который удовлетворяет условию
 * @param {Array} arr - Массив для проверки
 * @param {Function} element - Функция проверки условия для каждого элемента
 * @param {*} element.item - Текущий элемент массива
 * @param {number} element.index - Индекс текущего элемента
 * @param {Array} element.array - Исходный массив
 * @returns {boolean} true если хотя бы один элемент прошёл проверку, иначе false
 */
const some = function(arr, element) {
    for(let i = 0; i < arr.length; i++) {
        if(element(arr[i], i, arr)) {
            return true;
        }
    }

    return false;
}

console.log(some(demoArray, (item) => item.id % 7 === 0));
console.log(some(demoArray, (item) => item.title.length >= 70));

console.log('-------------------');


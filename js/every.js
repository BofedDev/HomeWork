'use strict';
console.log('every');
/**
 * Проверяет, удовлетворяют ли ВСЕ элементы массива условию
 * @param {Array} arr - Массив для проверки
 * @param {Function} element - Функция проверки условия для каждого элемента
 * @param {*} element.item - Текущий элемент массива
 * @param {number} element.index - Индекс текущего элемента
 * @param {Array} element.array - Исходный массив
 * @returns {boolean} true если ВСЕ элементы прошли проверку, иначе false
 */
const every = function(arr, element) {
    for(let i = 0; i < arr.length; i++) {
        if(!element(arr[i], i, arr)) {
            return false;
        }
    }

    return true;
}

console.log(every(demoArray, (item) => item.id % 2 === 0));
console.log(every(demoArray, (item) => item.item.length >= 5));

console.log('-------------------');


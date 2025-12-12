'use strict';
console.log('FIND');
/**
 * Находит первый элемент массива, который удовлетворяет условию
 * @param {Array} arr - Массив для поиска
 * @param {Function} callback - Функция проверки условия для каждого элемента
 * @param {*} callback.item - Текущий элемент массива
 * @param {number} callback.index - Индекс текущего элемента
 * @param {Array} callback.array - Исходный массив
 * @returns {*} Первый найденный элемент или undefined, если ничего не найдено
 */
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
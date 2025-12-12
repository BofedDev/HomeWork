'use strict';
console.log('findIndex');
/**
 * Находит индекс первого элемента массива, который удовлетворяет условию
 * @param {Array} arr - Массив для поиска
 * @param {Function} callback - Функция проверки условия для каждого элемента
 * @param {*} callback.item - Текущий элемент массива
 * @param {number} callback.index - Индекс текущего элемента
 * @param {Array} callback.array - Исходный массив
 * @returns {number} Индекс первого найденного элемента или -1, если ничего не найдено
 */
const findIndex = function(arr, callback) {
    for(let i = 0; i < arr.length; i++) {
        if(callback(arr[i], i, arr)) {
            return i;
        }
    }
    return -1;
}

console.log(findIndex(demoArray, (item) => item.title === 'et porro tempora'));
console.log(findIndex(demoArray, (item) => item.id === 1));
console.log('-------------------');
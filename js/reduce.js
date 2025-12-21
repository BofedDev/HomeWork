'use strict';
console.log('Reduce---------------');

const tx = [
    { id: 1, category: "food", amount: 12 },
    { id: 2, category: "food", amount: 8 },
    { id: 3, category: "taxi", amount: 15 },
    { id: 4, category: "books", amount: 20 },
    { id: 5, category: "taxi", amount: 7 },
];

let reduce = function (arr) {
    let result = {};
    for (let i = 0; i < arr.length; i++) {
        let categories = arr[i].category;
        let total = arr[i].amount;
        if(result[categories]) {
            result[categories] += arr[i].amount;
        }
        else{
            result[categories] = arr[i].amount;
        }
    }
    return result;
}
console.log(reduce(tx))
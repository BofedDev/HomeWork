'use strict';
console.log('Find---------------');
const orders = [
    { id: 101, items: [{ sku: "A1", qty: 1 }, { sku: "C3", qty: 2 }] },
    { id: 102, items: [{ sku: "B2", qty: 1 }] },
    { id: 103, items: [{ sku: "B2", qty: 3 }, { sku: "A1", qty: 1 }] },
];

let find = function (arr){
    let result = null;
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].items.length; j++){
            if(arr[i].items[j].sku === 'B2'){
                result = arr[i];
                return result;
            }
        }
    }
    return result;
}
console.log(find(orders))
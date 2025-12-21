'use strict';
console.log('Map---------------');
const products = [
    { id: 1, name: "Mouse", price: 25, inStock: true },
    { id: 2, name: "Keyboard", price: 70, inStock: false },
    { id: 3, name: "Monitor", price: 210, inStock: true },
];

let map = function(arr){
    let result = [];
    let add = ''
    for(let i = 0; i < arr.length; i++){
        if(products[i].inStock === false){
           add = '(out of stock)'
        }
        else{
            add = '';
        }
        result.push(`Name: ${products[i].name} price: ${products[i].price}. ${add}`);
    }
    return result;
}

console.log(map(products))
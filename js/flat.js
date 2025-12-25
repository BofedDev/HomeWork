'use strict';
let arr1 = [1, 2, [3, [4, 5],6], [7,[8,[9],10],11],12];

function flat(arr) {
    if (arguments.length > 1) {
        throw new Error('Function accepts only 1 argument, too much arguments provided');
    }
    let result = arr.slice();



    while(result.some(item => Array.isArray(item))) {
        let temp = [];
        for(let i = 0; i < result.length; i++) {
            if(Array.isArray(result[i])) {
                for(let j = 0; j < result[i].length; j++) {
                    temp.push(result[i][j]);
                }
            } else {
                temp.push(result[i]);
            }
        }
        result = temp;
    }

    return result;
}

console.log(flat(arr1));
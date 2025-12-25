"use strict";

let bind = function(func, context, ...args) {
    if (context == null) context = globalThis;
    return function(...callArgs) {
        context.tempKey = func;
        const result = context.tempKey(...args, ...callArgs);
        delete context.tempKey;
        return result;
    };

}

console.log(bind(user.showInformation, anotherUser)());
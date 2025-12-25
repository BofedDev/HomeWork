"use strict";

let apply = function(func, context, array = []) {
    if (context === null || context === undefined) context = globalThis;
    context.tempKey = func;
    const result = context.tempKey(...array);
    delete context.tempKey;
    return result;
}

console.log(apply(user.showInformation, anotherUser));
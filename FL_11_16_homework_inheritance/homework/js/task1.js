function assign(target, varArgs) {
    'use strict';
    //handling incorrect target
    if (target === null || target === undefined) {
        throw new TypeError('Cannot convert undefined or null to object');
    }

    var to = Object(target);

    for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource !== null && nextSource !== undefined) {
            for (var nextKey in nextSource) {
                // Avoid bugs when hasOwnProperty is shadowed
                if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                    to[nextKey] = nextSource[nextKey];
                }
            }
        }
    }
    return to;
}

const defaults = {
    a: 123,
    b: 777
};
const options = {
    a: 456
};
const configs = assign({}, defaults, options); // => {a: 456, b: 777}
console.log(configs);
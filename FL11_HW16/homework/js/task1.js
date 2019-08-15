 
   function assign( ){ 
  if (typeof Object.assign !== 'function') {
  // Must be writable: true, enumerable: false, configurable: true
  Object.defineProperty(Object, "assign", {
    value: function assign(target, varArgs) { // .length of function is 2
      'use strict';
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
    },
    writable: true,
    configurable: true
  });
}
}
 
   
 
 
 
 const defaults = { a: 123, b: 777 };
  const options = { a: 456 };
  const configs = assign({}, defaults, options); // => {a: 456, b: 777}

 
//////////////////////////////////////
 
console.log(configs); 

 var o1 = { a: 1, b: 1, c: 1 };
var o2 = { a: 2, c: 2 };
var o3 = { c: 3 };

var obj = Object.assign({}, o1, o2, o3);

console.log(obj);  // виводить { a: 2, b: 1, c: 3 }
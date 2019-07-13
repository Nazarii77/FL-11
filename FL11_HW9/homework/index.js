//0
function getNumbers(mystring) {
    let numarr = [];
    let strarr = mystring.split('');
    for (let i = 0; i < strarr.length; i++) {
        let element = parseInt(strarr[i]);
        if (!isNaN(element)) {
            numarr.push(element);
        }
    }
    console.log(numarr);
    return numarr;
}

getNumbers('string'); // returns [] 
getNumbers('n1um3ber95'); // returns [1,3,9,5]

//1
var obj = {
    string: 0,
    object: 0,
    'undefined': 0,
    number: 0,
    symbol: 0
};

function findTypes(...args) {
    for (let j = 0; j < arguments.length; j++) {
        switch (typeof args[j]) {
            case 'number':
                obj.number += 1;
                break;
            case 'string':
                obj.string += 1;
                break;
            case 'object':
                obj.object += 1;
                break;
            case 'undefined':
                obj[undefined] += 1;
                break;
            case 'symbol':
                obj.symbol += 1;
                break;
            default:
                break;
        }
    }

    for (let prop in obj) {
        if (obj[prop] !== 0) {
            console.log(prop + ':' + obj[prop]);
            return prop + ':' + obj[prop];
        }
    }

}

findTypes('number') // returns {“string”:1} 
findTypes(null, 5, 5, 5, 'hello') // returns {“object”:1, “number”:1, “string”:1}

//2
function executeforEach(array,func){
      for (var j = 0; j < array.length; j++) {
        array[j] = func(array[j]); 
        
    }  
       for ( j = 0; j < array.length; j++) {
        return array; 
    }  
}

  executeforEach([1,2,3], function(el) {
 console.log(el) 
}); // logs 1 2 3

function mapArray(array,func){ 
        console.log(executeforEach(array,func));
}
 mapArray([2, 5, 8], function(el) {
 return el + 3 
}); // returns [5, 8, 11]




 //3
 function filterArray(array,func){
         let arrayconfirm = [...array];
         arrayconfirm = executeforEach(arrayconfirm,func);
 
    for ( let j = 0; j < array.length; j++) {
      if (!arrayconfirm[j]) {
          array.splice(j,1);
      }
    }      
    console.log(array);
 }
 filterArray([2, 5, 8], function(el) {
 return el > 3 
}) // returns [5, 8]
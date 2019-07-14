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
let obj = {
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
findTypes(null, 5, 'hello') // returns {“object”:1, “number”:1, “string”:1}

//2
function executeforEach(array,func){
      for (let j = 0; j < array.length; j++) {
        array[j] = func(array[j]); 
        
    }  
       for (let j = 0; j < array.length; j++) {
        return array; 
    }  
}

  executeforEach([1,2,3], function(el) {
 console.log(el) 
}); // logs 1 2 3


//3
function mapArray(array,func){ 
        console.log(executeforEach(array,func));
}
mapArray([2, 5, 8], function(el) {
 return el + 3 
}); // returns [5, 8, 11]



 //4
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



//5 
function showFormattedDate (date){
    let namemonth = [
    'Jan', 'Feb', 'Mar',
    'Apr', 'May', 'Jun', 'Jul',
    'Aug', 'Sep', 'Oct',
    'Nov', 'Dec'
  ];

  let day = date.getDate();
  let IndexOfMonth = date.getMonth();
  let year = date.getFullYear();
  console.log('Date: ' + namemonth[IndexOfMonth] +' '+ day + ' ' + year);
  return 'Date: ' + namemonth[IndexOfMonth] +' '+ day + ' ' + ' ' + year;
}


showFormattedDate(new Date('2019-01-27T01:10:00')) 
// returns ‘Date: Jan 27 2019’
// every month should be showed as 3 letters (e.g. Feb, Apr or Dec)


//6

function canConvertToDate (date){
  try {
     new Date(date).toISOString();
     console.log(true);
     return true;
  } catch(err) {
     console.log(false);
      return false;
  }
}

canConvertToDate('2016-13-18T00:00:00'); // false
canConvertToDate('2016-03-18T00:00:00'); // true

//7

let second = 1000;//miliseconds
let minute = 60*second;
let hour =60*minute;
let day = 24*hour;

function daysBetween(firstdate, seconddate){
  let daysdiff = Math.round((seconddate-firstdate)/day);
  console.log(daysdiff);    
    return daysdiff ;
 
}

daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00')) // 32


//8

function getAmountOfAdultPeople (data) {
  let numofadults = 0;
  for (let i=0; i<data.length; i++) {
   let birth = new Date(data[i][' birthday ']);
   showFormattedDate(birth);
    let years = daysBetween( birth,new Date());
    years = years / 365 ;
    if (years >= 18){
      numofadults++;  
    } 
  }
  console.log(numofadults);
  return numofadults;
}
 
 
let data = [
  {
    '_id': '5b5e3168c6bf40f2c1235cd6',
    'index': 0,
    ' birthday ': '2016-03-18T00:00:00',
    'eyeColor': 'green',
    'name': 'Stein',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e3168e328c0d72e4f27d8',
    'index': 1,
    ' birthday ': '1991-02-11T00:00:00',
    'eyeColor': 'blue',
    'name': 'Cortez',
    'favoriteFruit': 'strawberry'
  },
  {
    '_id': '5b5e3168cc79132b631c666a',
    'index': 2,
    ' birthday ': '1984-04-17T00:00:00',
    'eyeColor': 'blue',
    'name': 'Suzette',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e31682093adcc6cd0dde5',
    'index': 3,
    ' birthday ': '1994-04-17T00:00:00',
    'eyeColor': 'green',
    'name': 'George',
    'favoriteFruit': 'banana'
  }
];


getAmountOfAdultPeople(data) // returns 3;

//9

function keys (obj) {
  console.log(Object.keys(obj)); // ["a", "b", "c"]
}

keys({keyOne: 1, keyTwo: 2, keyThree: 3}) // returns [“keyOne”, “keyTwo”, “keyThree”]

//10


function values (obj) {
  let outputarray = [];
    for (let prop in obj) {
  outputarray.push(obj[prop]);
  }
  console.log(outputarray);
  return outputarray;
}
values({keyOne: 1, keyTwo: 2, keyThree: 3}) // returns [1, 2, 3]
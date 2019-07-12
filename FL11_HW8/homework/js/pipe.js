let initnumber;

function addOne(x) {
    return x + 1;
}

 function pipe(receivenum, ...args) {
    initnumber = receivenum;
    for (var j = 0; j < arguments.length-1; j++) {
        initnumber = args[j](initnumber);
    }
    return initnumber;
 }

pipe(1, addOne); //=> 2
pipe(1, addOne, addOne); //=> 3
pipe(1, addOne, addOne, addOne); //=> 4

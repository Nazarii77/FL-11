let initnumber;

function addOne(x) {
    return x + 1;
}

 function pipe(receivenum,receivefunc) {
    initnumber = receivenum;
    for (var j = 1; j < arguments.length; j++) {
        initnumber = receivefunc(initnumber);
    }
    return initnumber;
 }

pipe(1, addOne); //=> 2
pipe(1, addOne, addOne); //=> 3

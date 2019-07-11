function addOne(x) {
    return x + 1;
}

 function pipe() {
  let initnumber = arguments[0];
    for (var j = 1; j < arguments.length; j++) {
        initnumber = addOne(initnumber);
    }
    return initnumber;
 }

pipe(1, addOne); //=> 2
pipe(1, addOne, addOne); //=> 3

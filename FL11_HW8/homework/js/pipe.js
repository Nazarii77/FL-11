function addOne(x) {
    return x + 1;
}

function pipe() {
    b.apply(this, arguments);
}

function b() {
    let initnumber = arguments[0];
    //console.log(number);
    for (var j = 1; j < arguments.length; j++) {
        initnumber = addOne(initnumber);
    }
    console.log(initnumber);
    return initnumber;
}

pipe(1, addOne); //=> 2
pipe(1, addOne, addOne); //=> 3
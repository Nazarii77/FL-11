function addOne(x) {
  return x + 1;
}

const pipe = (op1, op2) => {
  // return a function that bundles all
  // operations into a single operation
  return (arg) => {
     // first we invoke op1 with the passed
    // arg and save its output
   const result1 = op1(arg);
   // invoke op2 by calling it with
   // saved output of the op1 and return the result of op2
   return op2(result1);
  }
}

pipe(1, addOne); //=> 2
pipe(1, addOne, addOne); //=> 3

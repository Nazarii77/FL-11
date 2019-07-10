function reverseNumber(x) {
    var inputnumber = x;
    var reversenum = 0;
    var lastofDigit;
    while (inputnumber !== 0) {
        lastofDigit = inputnumber % 10;
        reversenum = (reversenum * 10) + lastofDigit;
        inputnumber = parseInt(inputnumber / 10);
    }
    return reversenum;
}

reverseNumber(123); //=> 321
reverseNumber(-456); //=> -654
reverseNumber(10000); //=> 1
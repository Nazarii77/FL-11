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
}

getNumbers('string'); // returns [] 
getNumbers('n1um3ber95'); // returns [1,3,9,5]
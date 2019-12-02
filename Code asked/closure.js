function Counter(){

	var count = 0;
	return function() {
		count++;
		return count;
	}
}


var counter = Counter();
counter()

console.log(counter());


var counter2 = Counter();
counter2()
counter2()
counter2()
console.log(counter2());
////////////////////////////////////////////////////////////////////////////// es15


function Counter(){
	var count = 0;
	return () => count++;
}


var counter = Counter();
counter()
counter()
console.log(counter()); //////2


var counter2 = Counter();
counter2()
counter2()
counter2()
console.log(counter2());/////3

///////////////////////////////////////////////////////////////////////////////////////////
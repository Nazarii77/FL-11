function isBigger(a,b){
	return a>b;
}

function isSmaller(a,b){
	var smaller = !isBigger(a,b);
	return smaller;
}

isSmaller(5,-1);
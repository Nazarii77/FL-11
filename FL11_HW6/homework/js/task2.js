let a1,a2,a3= 0; 
let arr = prompt('Enter your numbers (triangle dimensions separate by comma): a1,a2,a3').split(',');

arr.sort(function(a,b){
 return a-b
});

a1=parseInt(arr[0]); 
a2=parseInt(arr[1]);
a3=parseInt(arr[2]);
 

 if ( a1+a2 <a3 ) {
		console.log( 'Triangle doesn’t exist' );
 }else if (a1===a2 && a2===a3){
		console.log('Eequivalent triangle');
 }else if (a1===a2){
		console.log('Isosceles triangle');
 }else if (a1===a3){
		console.log('Isosceles triangle');
 }else if (a2===a3){
		console.log('Isosceles triangle');
 }else{
 console.log('Normal triangle');
}
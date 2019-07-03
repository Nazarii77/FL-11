// Your code goes here<script>
let a1,a2,b1,b2,c1,c2 = 0;
let c,xa,xb = 0;
let arr = prompt('Enter your numbers (separate by comma): a1,a2,b1,b2,c1,c2').split(',')

a1=parseInt(arr[0]); 
a2=parseInt(arr[1]);
b1=parseInt(arr[2]);
b2=parseInt(arr[3]);
c1=parseInt(arr[4]);
c2=parseInt(arr[5]);

if ( c1 ===(a1+b1)/2 ) {
		if ( c2 ===(a2+b2)/2 ) {
		console.log('true');
		}else{
		console.log('false');
		}
} else{
	console.log('false');
}






 

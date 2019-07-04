let input = prompt('Enter your email here');
let password = ""; 
let newpassword = ""; 

if (input === null){
	alert('Canceled.');
} else if (input.length < 6 ) {
	alert('I don`t know any emails having name length less than 6 symbols');
} else if (input === "user@gmail.com"){
	 password = prompt('Enter your password');
	 if (password==="UserPass") {
	 	if(confirm("Do you want to change your password?")){
	 		if ( password=== prompt('Enter your OLD password')) {
	 				alert("1111");
	 		} 
	 	} else {
	 		alert("You have failed the change.");
	 	}

	 } else {
	 	alert('Wrong password');
	 }

} else if (input === "admin@gmail.com"){
	 password === prompt('Enter your password');
	 if (password==="AdminPass") {
	 			alert("222");
	 } else {
	 	alert('Wrong password');
	 }
}
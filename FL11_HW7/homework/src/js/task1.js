let inputEmail = '';
let inputpassword = '';
let newpassword = '';
let sConfirmation = '';
let olduserpass = '';

inputEmail = prompt('Enter your email here');

if (inputEmail === null) {
    alert('Canceled.');
} else if (inputEmail.length < 6) {
    alert('I don`t know any emails having name length less than 6 symbols');
} else if (inputEmail === 'user@gmail.com') {
    inputpassword = prompt('Enter your password');
    if (inputpassword === 'UserPass') {
        sConfirmation = confirm('Do you want to change your password?');
        if (sConfirmation) {
            olduserpass = prompt('Enter your OLD password');
            if (inputpassword === olduserpass) {
                newpassword = prompt('Enter your NEW password');
                if (newpassword.length < 5) {
                    alert('It’s too short password. Sorry.');
                } else {
                    if (newpassword === prompt('REENTER your NEW password')) {
                        alert('You have successfully changed your password.');
                    } else {
                        alert('You wrote the wrong password');
                    }
                }

            } else if (olduserpass === null) {
                alert('Cancelled');
            } else {
                alert('Wrong password');
            }
        } else {
            alert('You have failed the change.');
        }
    } else if (inputpassword === '') {
        alert('Cancelled');
    } else {
        alert('Wrong password');
    }
} else if (inputEmail === 'admin@gmail.com') {
    inputpassword = prompt('Enter your password');
    if (inputpassword === 'AdminPass') {
        sConfirmation = confirm('Do you want to change your password?');
        if (sConfirmation) {
            olduserpass = prompt('Enter your OLD password');
            if (inputpassword === olduserpass) {
                newpassword = prompt('Enter your NEW password');
                if (newpassword.length < 5) {
                    alert('It’s too short password. Sorry.');
                } else {
                    if (newpassword === prompt('REENTER your NEW password')) {
                        alert('You have successfully changed your password.');
                    } else {
                        alert('You wrote the wrong password');
                    }
                }
            } else if (olduserpass === null) {
                alert('Cancelled');
            }
        } else {
            alert('You have failed the change.');
        }
    } else {
        alert('Wrong password');
    }
} else {
	alert('I don’t know you');
}
var input = '';
let password = '';
const newpassword = '';

input = prompt('Enter your email here');

if (input === null) {
    alert('Canceled.');
} else if (input.length < 6) {
    alert('I don`t know any emails having name length less than 6 symbols');
} else if (input === 'user@gmail.com') {
    password = prompt('Enter your password');
    if (password === 'UserPass') {
        let sConfirmation = confirm('Do you want to change your password?');
        if (sConfirmation) {
            let olduserpass = prompt('Enter your OLD password');
            if (password === olduserpass) {
                let newpassword = prompt('Enter your NEW password');
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
    } else if (password === '') {
        alert('Cancelled');
    } else {
        alert('Wrong password');
    }
} else if (input === 'admin@gmail.com') {
    password = prompt('Enter your password');
    if (password === 'AdminPass') {
        let sConfirmation = confirm('Do you want to change your password?');
        if (sConfirmation) {
            let olduserpass = prompt('Enter your OLD password');
            if (password === olduserpass) {
                let newpassword = prompt('Enter your NEW password');
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
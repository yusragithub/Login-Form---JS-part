function validate(e) {
    e.preventDefault();
}

const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const age = document.getElementById('age').value;
const msgBox = document.getElementById('message');

let message = '';

if (email === '') {
     message = 'Email app ke abba g a ker likhen ge?';
     msgBox.style.color = 'red';
}
else if (password === '') {
     message = 'Please enter a password!';
     msgBox.style.color = 'pink';
}
else if (age === '') {
     message = 'Please enter your age';
     msgBox.style.color = 'orange';
}

else {
    message = 'Login Successful';
    msgBox.style.color = 'green';
}

msgBox.innerText = message;
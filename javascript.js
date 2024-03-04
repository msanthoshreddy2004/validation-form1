 document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    let isValid = true;

    let fullName = document.getElementById('fullName').value;
    let fullNameError = document.getElementById('fullNameError');
    if (fullName.length < 5) {
        fullNameError.textContent = 'Name must not be less than 5 characters';
        isValid = false;
    } else {
        fullNameError.textContent = '';
    }

    let email = document.getElementById('email').value;
    let emailError = document.getElementById('emailError');
    if (!email.includes('@')) {
        emailError.textContent = 'Email should have @ character in it';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    let phoneNumber = document.getElementById('phoneNumber').value;
    let phoneNumberError = document.getElementById('phoneNumberError');
    if (phoneNumber === '123456789' || phoneNumber.length !== 10) {
        phoneNumberError.textContent = 'Phone Number should not be 123456789 and must be a 10-digit number.';
        isValid = false;
    } else {
        phoneNumberError.textContent = '';
    }

    let password = document.getElementById('password').value;
    let passwordError = document.getElementById('passwordError');
    if (password === 'password' || password === '' || password.length < 8) {
        passwordError.textContent = 'Password is not strong';
        isValid = false;
    } else {
        passwordError.textContent = '';
    }

    let confirmPassword = document.getElementById('confirmPassword').value;
    let confirmPasswordError = document.getElementById('confirmPasswordError');
    if (confirmPassword !== password) {
        confirmPasswordError.textContent = 'Password and confirm password should match';
        isValid = false;
    } else {
        confirmPasswordError.textContent = '';
    }

    if (isValid) {
        alert('Form submitted successfully');
    }
}

function validateName() {
    let fullName = document.getElementById('fullName').value;
    let fullNameError = document.getElementById('fullNameError');
    if (fullName.length < 5) {
        fullNameError.textContent = 'Name must not be less than 5 characters';
    } else {
        fullNameError.textContent = '';
    }
}

function validateEmail() {
    let email = document.getElementById('email').value;
    let emailError = document.getElementById('emailError');
    if (!email.includes('@')) {
        emailError.textContent = 'Email should have @ character in it';
    } else {
        emailError.textContent = '';
    }
}

function validatePhoneNumber() {
    let phoneNumber = document.getElementById('phoneNumber').value;
    let phoneNumberError = document.getElementById('phoneNumberError');
    if (phoneNumber === '123456789' || phoneNumber.length !== 10) {
        phoneNumberError.textContent = 'Phone Number should not be 123456789 and must be a 10-digit number.';
    } else {
        phoneNumberError.textContent = '';
    }
}

function validatePassword() {
    let password = document.getElementById('password').value;
    let passwordError = document.getElementById('passwordError');
    if (password === 'password' || password === '' || password.length < 8) {
        passwordError.textContent = 'Password is not strong';
    } else {
        passwordError.textContent = '';
    }
}

function validateConfirmPassword() {
    let confirmPassword = document.getElementById('confirmPassword').value;
    let confirmPasswordError = document.getElementById('confirmPasswordError');
    if (confirmPassword !== document.getElementById('password').value) {
        confirmPasswordError.textContent = 'Password and confirm password should match';
    } else {
        confirmPasswordError.textContent = '';
    }
}
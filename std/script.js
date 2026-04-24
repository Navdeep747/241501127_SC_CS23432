document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();
    clearErrors();

    const firstName = document.getElementById('firstName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const mobile = document.getElementById('mobile').value.trim();
    const address = document.getElementById('address').value.trim();

    let isValid = true;

    if (!validateFirstName(firstName)) isValid = false;
    if (!validateEmail(email)) isValid = false;
    if (!validatePassword(password)) isValid = false;
    if (!validateMobile(mobile)) isValid = false;
    if (!validateAddress(address)) isValid = false;

    if (isValid) {
        Swal.fire({
            title: 'Success!',
            text: 'Registration Successful!',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(() => {
            document.getElementById('registrationForm').reset();
            clearErrors();
        });
    }
});

function validateFirstName(firstName) {
    const field = document.getElementById('firstName');
    const error = document.getElementById('firstNameError');
    const pattern = /^[A-Za-z]{2,}$/;

    if (!pattern.test(firstName)) {
        error.textContent = "First name must contain only letters (min 2 characters)";
        setInvalid(field);
        return false;
    }

    setValid(field);
    error.textContent = "";
    return true;
}


function validateEmail(email) {
    const field = document.getElementById('email');
    const error = document.getElementById('emailError');
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!pattern.test(email)) {
        error.textContent = "Enter a valid email (example@domain.com)";
        setInvalid(field);
        return false;
    }

    setValid(field);
    error.textContent = "";
    return true;
}

function validatePassword(password) {
    const field = document.getElementById('password');
    const error = document.getElementById('passwordError');

    if (password.length < 6) {
        error.textContent = "Password must be at least 6 characters";
        setInvalid(field);
        return false;
    }

    setValid(field);
    error.textContent = "";
    return true;
}

function validateMobile(mobile) {
    const field = document.getElementById('mobile');
    const error = document.getElementById('mobileError');
    const pattern = /^[0-9]{10}$/;

    if (!pattern.test(mobile)) {
        error.textContent = "Mobile number must contain exactly 10 digits";
        setInvalid(field);
        return false;
    }

    setValid(field);
    error.textContent = "";
    return true;
}

function validateAddress(address) {
    const field = document.getElementById('address');
    const error = document.getElementById('addressError');

    if (address.length < 5) {
        error.textContent = "Address must be at least 5 characters";
        setInvalid(field);
        return false;
    }

    setValid(field);
    error.textContent = "";
    return true;
}

function setInvalid(field) {
    field.classList.add("invalid");
    field.classList.remove("valid");
}

function setValid(field) {
    field.classList.add("valid");
    field.classList.remove("invalid");
}

function clearErrors() {
    document.querySelectorAll(".error").forEach(e => e.textContent = "");
    document.querySelectorAll("input, textarea").forEach(input => {
        input.classList.remove("valid", "invalid");
    });
}

document.getElementById('firstName').addEventListener('blur', function () {
    validateFirstName(this.value.trim());
});

document.getElementById('email').addEventListener('blur', function () {
    validateEmail(this.value.trim());
});

document.getElementById('password').addEventListener('blur', function () {
    validatePassword(this.value);
});

document.getElementById('mobile').addEventListener('blur', function () {
    validateMobile(this.value.trim());
});

document.getElementById('address').addEventListener('blur', function () {
    validateAddress(this.value.trim());
});

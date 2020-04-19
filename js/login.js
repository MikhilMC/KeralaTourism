function validateLogin() {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let emailValidity = checkEmailValidity(email.value);
    let passwordValidity = checkPasswordValidity(password.value);
    return emailValidity && passwordValidity;
}

function checkEmailValidity(email) {
    let emailError = document.getElementById("emailError");
    if (email.length === 0) {
        emailError.textContent = "Email can not be empty";
        emailError.style.color = "red";
        return false;
    } else {
        let emailRegex = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
        if (emailRegex.test(email)) {
            emailError.textContent = "Valid Email";
            emailError.style.color = "green";
            return true;
        } else {
            emailError.textContent = "Invalid Email";
            emailError.style.color = "red";
            return false;
        }
    }
}

function checkPasswordValidity(password) {
    let passwordError = document.getElementById("passwordError");
    if (password.length === 0) {
        passwordError.textContent = "Password can not be empty";
        passwordError.style.color = "red";
        return false;
    } else if (password.length < 8) {
        passwordError.textContent = "Password is too short";
        passwordError.style.color = "red";
        return false;
    } else {
        let passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).{8,}$/;
        if (passwordRegex.test(password)) {
            passwordError.textContent = "Valid password";
            passwordError.style.color = "green";
            return true;
        } else {
            passwordError.textContent = "Invalid password";
            passwordError.style.color = "red";
            return false;
        }
    }
}
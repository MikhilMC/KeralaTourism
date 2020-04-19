function validateSignup() {
    let email = document.getElementById("email");
    let emailValidity = checkEmailValidity(email.value);

    let phoneNumber = document.getElementById("phoneNumber");
    let phoneNumberValidity = checkPhoneNumberValidity(phoneNumber.value);

    let password = document.getElementById("password");
    let passwordValidity = checkPasswordValidity(password.value);

    let confirmPassword = document.getElementById("confirmPassword");

    let status = emailValidity && phoneNumberValidity && passwordValidity && (password.value === confirmPassword.value);
    return status;
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
            emailError.textContent = "";
            //emailError.style.color = "green";
            return true;
        } else {
            emailError.textContent = "Invalid Email";
            emailError.style.color = "red";
            return false;
        }
    }
}

function checkPhoneNumberValidity(phoneNumber) {
    let phoneNumberError = document.getElementById("phoneNumberError");
    if (phoneNumber.length === 0) {
        phoneNumberError.textContent = "Phone number can not be empty";
        phoneNumberError.style.color = "red";
        return false;
    } else {
        let phoneNumberRegex = /^\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/;
        if (phoneNumberRegex.test(phoneNumber)) {
            phoneNumberError.textContent = "";
            //phoneNumberError.style.color = "green";
            return true;
        } else {
            phoneNumberError.textContent = "Invalid phone number";
            phoneNumberError.style.color = "red";
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
            passwordError.textContent = "";
            //passwordError.style.color = "green";
            return true;
        } else {
            passwordError.textContent = "Invalid password";
            passwordError.style.color = "red";
            return false;
        }
    }
}

function checkPassword() {
    let regexArray = [];
    let count = 0;
    let password = document.getElementById("password").value;
    let strengthMeter = document.getElementById("strengthMeter1");
    let strength = document.getElementById("strengthStatus1");
    regexArray.push(/(?=.*\d)/);
    regexArray.push(/(?=.*[a-z])/);
    regexArray.push(/(?=.*[A-Z])/);
    //regexArray.push(/^(?=.{8,})/);
    console.log(regexArray);
    for (let i = 0; i < regexArray.length; i++) {
        if (regexArray[i].test(password)) {
            console.log(regexArray[i] + " " + password);
            console.log(regexArray[i].test(password));
            count += 1;
        }
    }
    switch (count) {
        case 1:
            strengthMeter.value = 1;
            strength.textContent = "Poor";
            strength.style.color = "red";
            break;
        case 2:
            strengthMeter.value = 2;
            strength.textContent = "Medium";
            strength.style.color = "orange";
            break;
        case 3:
            strengthMeter.value = 3;
            strength.textContent = "Strong";
            strength.style.color = "green";
            break;
        default:
            break;
    }
}

function checkConfirmPassword() {
    let regexArray = [];
    let count = 0;
    let password = document.getElementById("confirmPassword").value;
    let strengthMeter = document.getElementById("strengthMeter2");
    let strength = document.getElementById("strengthStatus2");
    regexArray.push(/(?=.*\d)/);
    regexArray.push(/(?=.*[a-z])/);
    regexArray.push(/(?=.*[A-Z])/);
    //regexArray.push(/^(?=.{8,})/);
    console.log(regexArray);
    for (let i = 0; i < regexArray.length; i++) {
        if (regexArray[i].test(password)) {
            console.log(regexArray[i] + " " + password);
            console.log(regexArray[i].test(password));
            count += 1;
        }
    }
    switch (count) {
        case 1:
            strengthMeter.value = 1;
            strength.textContent = "Poor";
            strength.style.color = "red";
            break;
        case 2:
            strengthMeter.value = 2;
            strength.textContent = "Medium";
            strength.style.color = "orange";
            break;
        case 3:
            strengthMeter.value = 3;
            strength.textContent = "Strong";
            strength.style.color = "green";
            break;
        default:
            break;
    }
}
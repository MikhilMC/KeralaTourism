let passwordGroup = document.querySelectorAll(".passwordGroup");
let typePassword = document.querySelectorAll(".typePassword");
let strengthMeter = document.querySelectorAll(".strengthMeter");
let strengthStatus = document.querySelectorAll(".strengthStatus");

passwordGroup[0].addEventListener("keyup", checkPassword);
passwordGroup[1].addEventListener("keyup", checkPassword);

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
    let regexArray = new Array();
    let count1 = 0, count2 = 0;

    regexArray.push(/(?=.*\d)/);
    regexArray.push(/(?=.*[a-z])/);
    regexArray.push(/(?=.*[A-Z])/);
    regexArray.push(/^(?=.{8,})/);

    for (let i=0; i<regexArray.length; i++) {
        if (regexArray[i].test(typePassword[0].value)) {
            count1 += 1;
        }
        if (regexArray[i].test(typePassword[1].value)) {
            count2 += 1;
        }
    }
    switch (count1) {
        case 0:
            strengthMeter[0].value = 0;
            strengthStatus[0].textContent = "";
            break;
        case 1:
            strengthMeter[0].value = 1;
            strengthStatus[0].textContent = "Poor";
            strengthStatus[0].style.color = "red";
            break;
        case 2:
            strengthMeter[0].value = 2;
            strengthStatus[0].textContent = "Weak";
            strengthStatus[0].style.color = "orange";
            break;
        case 3:
            strengthMeter[0].value = 3;
            strengthStatus[0].textContent = "Medium";
            strengthStatus[0].style.color = "yellow";
            break;
        case 4:
            strengthMeter[0].value = 4;
            strengthStatus[0].textContent = "Strong";
            strengthStatus[0].style.color = "green";
            break;
        default:
            break;
    }
    switch (count2) {
        case 0:
            strengthMeter[1].value = 0;
            strengthStatus[1].textContent = "";
            break;
        case 1:
            strengthMeter[1].value = 1;
            strengthStatus[1].textContent = "Poor";
            strengthStatus[1].style.color = "red";
            break;
        case 2:
            strengthMeter[1].value = 2;
            strengthStatus[1].textContent = "Weak";
            strengthStatus[1].style.color = "orange";
            break;
        case 3:
            strengthMeter[1].value = 3;
            strengthStatus[1].textContent = "Medium";
            strengthStatus[1].style.color = "yellow";
            break;
        case 4:
            strengthMeter[1].value = 4;
            strengthStatus[1].textContent = "Strong"
            strengthStatus[1].style.color = "green"
        default:
            break;
    }
}
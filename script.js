function validatePassword(password) {

    // Minimum length check
    if (password.length < 8) {
        return "Password must be at least 8 characters long";
    }

    // Special character check
    let specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;
    if (!specialCharPattern.test(password)) {
        return "Password must contain at least one special character";
    }

    return "Password is valid";
}

// Example usage
let userPassword = prompt("Enter password:");
alert(validatePassword(userPassword));
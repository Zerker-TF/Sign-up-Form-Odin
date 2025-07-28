const myForm = document.getElementById("sign-up-form")

myForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const firstName = document.getElementById("first-name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const phone = document.getElementById("phone");
    const confirmPassword = document.getElementById("confirm-password");

    const firstNameError = document.getElementById("first-name-error");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
    const phoneError = document.getElementById("phone-error");
    const confirmPasswordError = document.getElementById("confirm-password-error");

    //clear errors
    firstNameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    phoneError.textContent = "";
    confirmPasswordError.textContent = "";

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phonePattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    const digitCount = /^\d{10}$/;

    let isValid = true;

    //validations

    if(firstName.value.trim() === "") {
        firstNameError.textContent = "First name is required.";
        isValid = false;
    }

    if(email.value.trim() === "") {
        emailError.textContent = "Email is required.";
        isValid = false;
    }else if (!emailPattern.test(email.value)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if(phone.value.trim() === "") {
        phoneError.textContent = "Phone number is required.";
        isValid = false;
    }else if(!phonePattern.test(phone.value)) {
        phoneError.textContent = "Please enter a valid phone number.";
        isValid = false;
    }

    if(!digitCount.test(phone.value.trim())) {
        phoneError.textContent = "Phone number must be 10 digits.";
        isValid = false;
    }

    if (password.value.trim() === "") {
        passwordError.textContent = "Password is required.";
        isValid = false;
    } else if (password.value.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters.";
        isValid = false;
    }

    
    if (confirmPassword.value.trim() === "") {
        confirmPasswordError.textContent = "Please confirm your password.";
        isValid = false;
    } else if (confirmPassword.value !== password.value) {
        confirmPasswordError.textContent = "Passwords do not match.";
        isValid = false;
    }

    if (isValid) {
        myForm.submit();
    }


});
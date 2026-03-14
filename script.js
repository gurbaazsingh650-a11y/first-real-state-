// script.js

// Function for form validation
function validateForm() {
    const form = document.getElementById('signupForm');
    let valid = true;

    // Example validation: check if all fields are filled
    [...form.elements].forEach(element => {
        if (element.required && !element.value) {
            valid = false;
            alert(`Please fill out the ${element.name} field.`);
        }
    });

    return valid;
}

// Function for remember me checkbox
function toggleRememberMe() {
    const checkbox = document.getElementById('rememberMe');
    if (checkbox.checked) {
        localStorage.setItem('rememberMe', 'true');
    } else {
        localStorage.removeItem('rememberMe');
    }
}

// Function for password visibility toggle
function togglePasswordVisibility() {
    const passwordField = document.getElementById('password');
    const toggleButton = document.getElementById('togglePassword');

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleButton.innerHTML = 'Hide Password';
    } else {
        passwordField.type = 'password';
        toggleButton.innerHTML = 'Show Password';
    }
}

// Function to toggle sign up form
function toggleSignupForm() {
    const signupForm = document.getElementById('signupForm');
    signupForm.style.display = signupForm.style.display === 'none' ? 'block' : 'none';
}

// Function to show forgot password modal
function showForgotPasswordModal() {
    const modal = document.getElementById('forgotPasswordModal');
    modal.style.display = 'block';
}

// Handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    if (validateForm()) {
        // Submit form data via AJAX or any method here
        alert('Form submitted successfully!');
    }
}

// Add event listeners
document.getElementById('signupForm').addEventListener('submit', handleSubmit);
document.getElementById('rememberMe').addEventListener('change', toggleRememberMe);
document.getElementById('togglePassword').addEventListener('click', togglePasswordVisibility);

// Example for showing modal
document.getElementById('forgotPasswordLink').addEventListener('click', showForgotPasswordModal);
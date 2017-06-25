// Function called when the form is submitted.
function validateForm() {
    'use strict';
    
    // Get references to the form elements:
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    
    // Validate logic for checking the email and the password!
    if (email.value == 'admin@titanmusicstore.com' && password.value == 'LogMeIn') {
        return true;
    } else if (email.value == 'nancy@titanmusicstore.com' && password.value == 'password123') {
        return true; 
    } else {
        alert('Please enter a valid email and/or password!');
    }
    return false;
    
} // End of validateForm() function.

// Function called when the window has been loaded.
// Function needs to add an event listener to the form.
function init() {
    'use strict';
    // Confirm that document.getElementById() can be used:
    if (document && document.getElementById) {
        var loginForm = document.getElementById('loginForm');
        loginForm.onsubmit = validateForm;
    }
} // End of init() function.
// Assign an event listener to the window's load event:
window.onload = init;
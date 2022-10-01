// Step 1: Add Click event handler with submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // step 2: get the email address in the input field
    // always remember to get .value to get text form an input field
    const emailField = document.getElementById('user-email');
    const mail = emailField.value;
    // step 3: get password
    // step 3.1: set Id on the Element
    // step 3.2: get the Element
    // step 3.3: get the value from the Element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // DANGER: Do not verify email password on the client side
    // varify email and password and check whether is invalid or not

    if(mail === "sehabahmed50100@gmail.com" && password === "secret") {
        window.location.href = 'bank.html';
    } else {
        alert('invalid user');
    }
});
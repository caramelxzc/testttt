/*=============== SHOW HIDDEN - PASSWORD ===============*/
const showHiddenPass = (loginPass, loginEye) => {
    const input = document.getElementById(loginPass),
        iconEye = document.getElementById(loginEye)

    iconEye.addEventListener('click', () => {
        // Change password to text
        if (input.type === 'password') {
            // Switch to text
            input.type = 'text'

            // Icon change
            iconEye.classList.add('ri-eye-line')
            iconEye.classList.remove('ri-eye-off-line')
        } else {
            // Change to password
            input.type = 'password'

            // Icon change
            iconEye.classList.remove('ri-eye-line')
            iconEye.classList.add('ri-eye-off-line')
        }
    })
}

showHiddenPass('login-pass', 'login-eye')


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginform').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get email and password values
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-pass').value;

        // Simple validation (for demonstration purposes)
        const validEmail = "user@example.com"; // Predefined valid email
        const validPassword = "password123"; // Predefined valid password

        if (email === validEmail && password === validPassword) {
            // Redirect to another page on successful login
            window.location.href = "index.html"; // Change to your target page
        } else {
            // Display an alert popup for invalid login
            alert('Invalid email or password.'); // Alert popup message
        }
    });
});
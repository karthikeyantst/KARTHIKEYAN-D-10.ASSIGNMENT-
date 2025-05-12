document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let isValid = true;

    // Clear previous errors
    document.querySelectorAll('.error').forEach(el => el.innerText = '');

    // Username validation
    const username = document.getElementById('username').value.trim();
    if (username.length < 3) {
        document.getElementById('usernameError').innerText = "Username must be at least 3 characters.";
        isValid = false;
    }

    // Email validation
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').innerText = "Enter a valid email.";
        isValid = false;
    }

    // Password validation
    const password = document.getElementById('password').value.trim();
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    if (!passwordRegex.test(password)) {
        document.getElementById('passwordError').innerText = "Password must be 8+ chars, 1 uppercase, 1 lowercase, 1 number, 1 special char.";
        isValid = false;
    }

    // Address validation
    const address = document.getElementById('address').value.trim();
    if (address.length < 10) {
        document.getElementById('addressError').innerText = "Address must be at least 10 characters.";
        isValid = false;
    }

    // Contact validation
    const contact = document.getElementById('contact').value.trim();
    const contactRegex = /^\d{10}$/;
    if (!contactRegex.test(contact)) {
        document.getElementById('contactError').innerText = "Contact must be exactly 10 digits.";
        isValid = false;
    }

    // Redirect if valid
    if (isValid) {
        window.location.href = "succes.html";
    }
});


    
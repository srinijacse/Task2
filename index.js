document.addEventListener("DOMContentLoaded", function () {

    // Email validation
    document.getElementById('email').addEventListener('input', function () {
        const email = this.value;
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            this.setCustomValidity('Please enter a valid email address.');
        } else {
            this.setCustomValidity('');
        }
    });

    // Phone validation
    document.getElementById('phone').addEventListener('input', function () {
        const phone = this.value;
        if (!/^\d{10}$/.test(phone)) {
            this.setCustomValidity('Please enter a valid 10-digit phone number.');
        } else {
            this.setCustomValidity('');
        }
    });

    // Handle form submission
    document.getElementById('userForm').addEventListener("submit", function (event) {
        event.preventDefault(); // Stop form from submitting normally

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;

        
        alert(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}`);


        alert("Submitted successfully!!");
        localStorage.setItem("username", name);

        // Redirect to welcome page
        window.location.href = "page2.html";

        // Optional: Clear form
        document.getElementById("userForm").reset();
    });

});

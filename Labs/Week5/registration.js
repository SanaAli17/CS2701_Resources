
const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    let buyer = document.getElementById("buyer").checked;
    let seller = document.getElementById("seller").checked;
    let terms = document.getElementById("terms").checked;

    if (name.trim() === "") {
        alert("Please enter your name");
        return;
    }

    if (email.trim() === "") {
        alert("Please enter your email");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address");
        return;
    }

    if (password === "") {
        alert("Please enter your password");
        return;
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    if (!buyer && !seller) {
        alert("Please select buyer or seller");
        return;
    }

    if (!terms) {
        alert("Please agree to the Terms of Use");
        return;
    }

    alert("Registration successful!");
});

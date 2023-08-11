function validateLoginForm() {
    var emailInput = document.getElementById("emailInput");
    var passwordInput = document.getElementById("passwordInput");
    var validationMessage = document.getElementById("validationMessage");

    // Regular expression patterns for email and phone number validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phonePattern = /^[0-9]{10}$/;

    var input = emailInput.value.trim();

    // Check if the input matches the email or phone number pattern
    if (emailPattern.test(input)) {
      validationMessage.textContent = "Valid email.";
      validationMessage.style.color = "green";
      window.location.href = "main.html";
    } else if (phonePattern.test(input)) {
      validationMessage.textContent = "Valid phone number.";
      validationMessage.style.color = "green";
    } else {
      validationMessage.textContent = "Invalid email or phone number.";
      validationMessage.style.color = "red";
    }
}

window.onload = function() {
    var rememberCheckbox = document.getElementById("remember");
    var storedValue = localStorage.getItem("rememberMe");

    if (storedValue === "true") {
      rememberCheckbox.checked = true;
    }
  };

  // Handle the "Remember Me" checkbox state change
  document.getElementById("remember").addEventListener("change", function() {
    var rememberCheckbox = document.getElementById("remember");

    // Store the checkbox state in the browser's localStorage
    localStorage.setItem("rememberMe", rememberCheckbox.checked.toString());
});
function validateLoginForm() {
    const emailInput = document.getElementById('emailInput').value;
    const passwordInput = document.getElementById('passwordInput').value;
    const rememberInput = document.getElementById('remember').checked;

    localStorage.setItem('email', emailInput);
    localStorage.setItem('password', passwordInput);
    localStorage.setItem('remember', rememberInput);
  
    window.location.href = 'index1.html';
}

  
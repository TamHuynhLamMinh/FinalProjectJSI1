function validateLoginForm() {
    const emailInput = document.getElementById('emailInput').value;
    const passwordInput = document.getElementById('passwordInput').value;
    const rememberInput = document.getElementById('remember').checked;

    localStorage.setItem('email', emailInput);
    localStorage.setItem('password', passwordInput);
    localStorage.setItem('remember', rememberInput);
  
    window.location.href = 'index1.html';
}

const storedEmail = localStorage.getItem('email');
const storedPassword = localStorage.getItem('password');
const storedRemember = localStorage.getItem('remember');

console.log('Stored Email:', storedEmail);
console.log('Stored Password:', storedPassword);
console.log('Stored Remember Me Option:', storedRemember);


  
document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordInput = document.getElementById('inputPassword4');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
});
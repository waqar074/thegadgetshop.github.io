// Toggle password visibility
function togglePassword() {
    const passwordFields = document.querySelectorAll('.password-wrapper input');
    passwordFields.forEach(field => {
        const type = field.getAttribute('type') === 'password' ? 'text' : 'password';
        field.setAttribute('type', type);
    });
}

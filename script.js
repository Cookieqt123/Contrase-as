function generatePassword() {
    const specialChars = '!@#$%^&*()_-+=<>?/[]{}|';
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const allChars = 'abcdefghijklmnopqrstuvwxyz' + specialChars + uppercaseLetters + numbers;

    let password = '';
    for (let i = 0; i < 9; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    // Ensure at least one special character, one uppercase letter, and one number
    const randomSpecialChar = specialChars[Math.floor(Math.random() * specialChars.length)];
    const randomUppercaseLetter = uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
    const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

    const randomIndices = [Math.floor(Math.random() * 3), Math.floor(Math.random() * 3), Math.floor(Math.random() * 3)];
    password =
        password.substring(0, randomIndices[0]) + randomSpecialChar +
        password.substring(randomIndices[0] + 1, randomIndices[1]) + randomUppercaseLetter +
        password.substring(randomIndices[1] + 1, randomIndices[2]) + randomNumber +
        password.substring(randomIndices[2] + 1);

    document.getElementById('password').value = password;
}

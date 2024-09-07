const captchaWords = [
    '5b4', '1c6', '075', '31e', '10d', '8c9',
    '9bb', '075', '34b', '0d5', '2f6', '3b1'
];
function generateCaptcha() {
    const randomIndex = Math.floor(Math.random() * captchaWords.length);
    return captchaWords[randomIndex];
}
function displayCaptcha() {
    const captchaCode = generateCaptcha();
    document.getElementById('captchaCode').textContent = captchaCode;
}
document.addEventListener('DOMContentLoaded', displayCaptcha);
document.getElementById('refreshCaptcha').addEventListener('click', displayCaptcha);

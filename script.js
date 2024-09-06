// List of predefined CAPTCHA codes
const captchaWords = [
    '5b4', '1c6', '075', '31e', '10d', '8c9',
    '9bb', '075', '34b', '0d5', '2f6', '3b1'
];

// Function to generate a random CAPTCHA code
function generateCaptcha() {
    const randomIndex = Math.floor(Math.random() * captchaWords.length);
    return captchaWords[randomIndex];
}

// Function to display the CAPTCHA code
function displayCaptcha() {
    const captchaCode = generateCaptcha();
    document.getElementById('captchaCode').textContent = captchaCode;
}

// Initialize CAPTCHA on page load
document.addEventListener('DOMContentLoaded', displayCaptcha);

// Optional: Refresh CAPTCHA on user action (e.g., clicking a button)
document.getElementById('refreshCaptcha').addEventListener('click', displayCaptcha);

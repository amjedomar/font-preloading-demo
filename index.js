const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

app.use((req, res, next) => {
    if (req.url.includes('fonts')) {
        setTimeout(next, 3000);
    } else {
        next();
    }
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

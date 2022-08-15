const express = require('express');
const app = express();

app.set('view-engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/button', (req, res) => {
    let d = Date.now();
    console.log(new Date(d));
});

app.listen(5000, () => {
    console.log('server is runnning');
});
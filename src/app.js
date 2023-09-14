const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');


const app = express();

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
});
app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/views/register.html');
});
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/login.html');
});
app.post('/register', (req, res) => {
    res.redirect('/');
});
app.post('/login', (req, res) => {
    res.redirect('/');
});
app.get('*', (req, res) => {
    res.status(404).send('Página no encontrada');
});

const port = 3030;
app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});

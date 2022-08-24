const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('Public'));



app.listen( process.env.PORT || 3030, function(){ 
    console.log('EL servidor esta corriendo en el puerto 5001')});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './Views/home.html'))
})

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './Views/register.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './Views/login.html'))
})

app.post('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './Views/home.html'))
})
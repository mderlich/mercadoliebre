const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('public'));

// ---------------------------------------------------------------
// send archivo...
app.get('/', (req, res) => { res.sendFile( path.join(__dirname, '/views/home.html') ); });
// app.post('/', (req, res) => { res.sendFile( path.join(__dirname, '/views/home.html') ); });

// register...
app.get('/register', (req, res) => { res.sendFile( path.join(__dirname, '/views/register.html') ); });
// login...
app.get('/login', (req, res) => { res.sendFile( path.join(__dirname, '/views/login.html') ); });
// ---------------------------------------------------------------

// el puerto segun indiquen
// app.listen(3000, () => console.log('Listo para ver en (Ctrl + Click)... http://localhost:3000/') );
// Modificacion para emplear en Heroku... 'process.env.PORT ||'
app.listen(process.env.PORT || 3000, () => console.log('Listo para ver en (Ctrl + Click)... http://localhost:3000/') );
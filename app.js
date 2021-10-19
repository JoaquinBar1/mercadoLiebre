const express = require('express'); 
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'))
}); 
app.get('/registrarUsuario', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'))
}); 
app.get('/logIn', (req, res) => {
    res.sendFile(path.join(__dirname, './views/logIn.html'))
}); 

app.listen(process.env.PORT || 3000, function(){
    console.log('Servidor Corriendo en el puerto 3000')
});


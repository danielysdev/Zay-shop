const express = require('express');
const cors = require('cors');
const routerAPI = require('./server/router/index.js');
const path = require('path');
const app = express();

app.use(cors()); //permite el acceso a diferentes dispositivos.
app.use(express.json()); // convertir todos los datos a Json, los que el servidora va requerir
app.use(express.urlencoded({
    extended: true,
})); // Extienda un modulo de node para que interprete las imagenes

routerAPI(app);

app.use(express.static('public'))
//con esto realizo las rutas
app.use('/', express.static(path.resolve(__dirname, 'client', 'home')));
app.use('/login', express.static(path.resolve(__dirname, 'client', 'login')));
app.use('/register', express.static(path.resolve(__dirname, 'client', 'register')));
app.use('/shop', express.static(__dirname + '/public'), express.static(path.resolve(__dirname, 'client', 'shop')));

//comment code
app.listen(3200, function(){
    console.log("El servidor esta escuchando el puerto 3200")
});
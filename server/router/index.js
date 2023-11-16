const express = require('express');
const router = express.Router();
const productos = require('../components/products/router.js');


function routerAPI(app){
    //definir la url de nuestra api
    app.use('/api/v1', router);

    //respuesta de rutas
    router.use('/productos', productos)
}

module.exports = routerAPI;
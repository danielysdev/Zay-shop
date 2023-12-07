import {getFetchAPI} from './fetchAPI.js';
const banner01 = document.getElementById('banner01');
// llamar a banner02 y banner03

document.addEventListener('DOMContentLoaded', () => {
    getFetchAPI()
        .then(data => {
            const listaDeProductos = data.message;
            console.log(data)
            banner01.setAttribute('src', `${listaDeProductos[0].producto.imagen}`)
            //imprimir la imagen de banner02 y banner03
        })
        .catch(err => console.log(err));
});
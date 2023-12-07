export const getFetchAPI = async() => {
    const getDataFromAPI = await fetch('http://localhost:3200/api/v1/productos', {
        method: 'GET'
    });
    const obtenerProductos = await getDataFromAPI.json();
    return obtenerProductos;
}
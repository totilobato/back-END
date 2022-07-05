import express from 'express';
import Contenedor from './contenedor.js';

const app = express();
const PORT = 8000;
const server = app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})

const producto = new Contenedor ('productos.txt')
console.log(producto)

app.get('/productos', async (req, res) => {
    const productos = await producto.getAll()
    res.send(productos)
    console.log(productos)
})

app.get('/productoRandom', async (req, res) => {
    const productos = await producto.getAll()
    const indexAleatorio = randomProduct(1, productos.length)
    function randomProduct (min, max){
        return Math.floor(Math.random()*((max+1)-min)+min);
    }
    res.send(productos[indexAleatorio] )
})
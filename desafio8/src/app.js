import express from 'express';
import productsRouter from './routes/products.js'
import __dirname from './utils.js'

const app = express();

const server = app.listen(8080, ()=>console.log(`Listening on port 8080`))

app.use(express.static(__dirname+'/public'))
app.use(express.json());

app.use(productsRouter)
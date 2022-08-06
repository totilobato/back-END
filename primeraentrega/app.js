import express from 'express';
import routerProducts from './src/routes/productsRouter.js'
import __dirname from './utils.js'

const app = express();

app.use(express.static(__dirname+'/public'))
app.use(express.json())
app.use('/api/products', routerProducts)

const server = app.listen(8080, ()=>console.log(`Listening on port 8080`))

server.on('error', (err)=> {
    console.log(err)
})


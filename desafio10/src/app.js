import express from 'express';
import path from 'path';
import __dirname from './utils.js';
import {engine} from 'express-handlebars'
import routes from './routes/productsRouter.js'

const app = express();
const server = app.listen(8080, ()=>console.log(`Listening on port 8080`))

app.engine('hbs', engine({
    extname: '.hbs',
    deafaultLayout: path.join(__dirname, '../views/layouts/main.hbs'),
    layoutsDir: path.join(__dirname, '../views/layouts'),
    partialsDir: path.join(__dirname, '../views/partials')
}))

app.set('views engine', 'hbs')
app.set ('views', path.join(__dirname, '../views'))

app.use('/', routes)
app.use(express.static(__dirname+'/public'))
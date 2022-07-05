import express from 'express';
import path from 'path';
import __dirname from './utils.js';
import handlebars from 'handlebars';
import memoryContainer from './memoryContainer.js'

const app = express();
const engine = handlebars();
const path = path();
const routes = memoryContainer();
const server = app.listen(8080, ()=>console.log(`Listening on port 8080`))



app.engine('hbs', engine({
    extname: '.hbs',
    deafaultLayout: path.join(__dirname, '../views/layouts/main.hbs'),
    layoutsDir: path.join(__dirname, '../views/layouts/layouts.hbs'),
    partialsDir: path.join(__dirname, '../views/partials')
}))

app.set('views engine', 'hbs')
app.set ('views', path.join(__dirname, '../views'))

app.use('/', routes)
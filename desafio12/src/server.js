import express from 'express'
import  path  from 'path'
import {fileURLToPath} from 'url'
import { Server } from 'socket.io'
import MessageContainer from './messageContainer.js'

const app = express()
const expressServer = app.listen(8080, () => console.log(`Listening on port 8080`))
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const io = new Server (expressServer)
const products = [{ title: "Bong", thumbnail: "https://http2.mlstatic.com/D_NQ_NP_927336-MLA47528400314_092021-O.webp", price: 2900}, { title: "Growing Tent", thumbnail: "https://http2.mlstatic.com/D_NQ_NP_950558-MLA43348371771_092020-O.webp", price: 25000 }, { title: "Grinder", thumbnail: "https://http2.mlstatic.com/D_NQ_NP_700526-MLA46154825058_052021-O.webp", price: 2000 }]
const messages = []

app.use(express.static(path.join(__dirname, './public')))

const messageContainer = new MessageContainer('messages.txt')

io.on('connection', async (socket) => {
    socket.emit('server:message', messageContainer.getAll())
})

io.on('connection', async socket => {
    console.log('User connected')
    socket.on('client:message', messageInfo => {
        messages.push(messageInfo)
        io.emit('server:message', messages)
    })
    socket.emit('server:products', products)
})
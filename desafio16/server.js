import express from 'express'
import path from 'path'
import {fileURLToPath} from 'url'
import { Server } from 'socket.io'
import productsContainer from './containers/productsContainer.js'

const server = express()
const expressServer = server.listen(8080, () => console.log(`Listening on port 8080`))
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const io = new Server (expressServer)

server.use(express.static(path.join(__dirname, './public')))

io.on('connection', async (socket) => {
    socket.emit('server:message',await messageContainer.getAll())
})

io.on('connection', async socket => {
    console.log('User connected')
    socket.on('client:message',async messageInfo => {
        await messageContainer.save(messageInfo)
        io.emit('server:message',await messageContainer.getAll())
    })
    socket.on('client: products', (data)=>{
        productsContainer.save(data)
        io.emit('server:products', productsContainer.getAll())
    })
})

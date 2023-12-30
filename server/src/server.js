import { Server } from "socket.io";
import {createServer} from 'http'


const httpServer = createServer()
const io = new Server(httpServer,{
    cors:['*']
})



io.on('connection', async (socket) => {
    console.log("New user in Session:"+socket.id)
    

    socket.on('usersInSession', async () => {
        const sockets = await io.fetchSockets()
        const usernames = sockets.map((socket) => socket.data.username)
        io.emit('ioUserInSession',usernames)
    })

    socket.on('message',(data) => {
        io.emit('ioMessage', data)
    })

    socket.on('changeName',(username) => {
        console.log(`${username} entrou para sessão`)
        socket.data.username = username
    })


    socket.on("disconnect", async () => {
        console.log(`${socket.data.username} desconectado!`)
        const sockets = await io.fetchSockets()
        const usernames = sockets.map((socket) => socket.data.username)
        io.emit('ioUserInSession',usernames)
    });
})

httpServer.listen(3333) //DEFINA A PORTA AQUI
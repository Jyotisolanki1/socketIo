const path = require('path')
const express = require('express');
const  {Server} = require('socket.io'); //importing socket io sever in our application
const http = require('http')




const app = express();
const server = http.createServer(app) //need to create http server for socket io can not use directly express

const  io = new Server (server) //will handle all server require and response

//Socket.io
io.on('connection',(socket)=>{
   socket.on('user-message',(message)=>{
    io.emit('message',message)
   })
})
app.use(express.static(path.join(__dirname, '/../public')))

server.listen(3000,()=>{
console.log('server is running on port number 3000' )
})
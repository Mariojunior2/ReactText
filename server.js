const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", 
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
    credentials: true
  }
});


app.get('/', (req, res) => {
  res.send('Servidor Socket.IO está rodando!');
});

server.listen(8080, () => {
  console.log('Servidor Socket.IO rodando na porta 8080...');
});

io.on('connection', (socket) => {
  console.log('Novo cliente conectado!');

  socket.on('message', (message) => {
    console.log(`Mensagem recebida: ${message}`);
    io.emit('message', message);
  });

  socket.on('disconnect', () => {
    console.log('Cliente desconectado!');
  });
});

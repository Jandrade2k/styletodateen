const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');


const app = express();
app.use(cors());

const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connection', box => {
    socket.join(box)
})

// user: database
// password: admin

// TODO: Inserir endereço do banco de dados.

mongoose.connect('mongodb+srv://database:admin@loja.usiri.gcp.mongodb.net/database?retryWrites=true&w=majority');

app.use((req, res, next) => {
    req.io = io;

    return next();
})

app.use(express.json());
app.use(express.urlencoded({extend: true}));
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')))

app.use(require('./routes'));

server.listen(process.env.PORT || 1605);
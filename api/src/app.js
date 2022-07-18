const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');

require('./db.js');

const server = express();

server.name = 'API';

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use('/', routes);

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});



// PRUEBA
server.get("/", function (_req, res) {
  console.log("someone pinged here!! " + new Date().toLocaleDateString());
  res.send({
    "id": "0",
    "tittle": "Tarea 1", 
    "description": "Descripcion 1",
    "priorityLevel":"high", 
    "finalized": false 
  });
});


server.get("/getVideoJuegos", (_req, res) => {
  console.log("someone pinged here!! " + new Date().toLocaleDateString());
  console.log("buscando video juegos")
});

module.exports = server;

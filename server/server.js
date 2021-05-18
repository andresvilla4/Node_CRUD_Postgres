const bodyParser = require('body-parser');
const express = require('express');
const routes = require('../Routes/request_processor');
const port = 3000;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configuración de rutas
app.use(require('../Routes/request_processor'));

app.listen(port);
console.log(`Listening on port: ${port}`);
const express = require('express');
const app = express();

app.use(require('../DB/use_functions'));

module.exports = app;

//getBooks();
//insertUser();
//editUser();
//deleteUser();
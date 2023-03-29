const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes/router');

//Mongo Data:
//caahp - YdEHofWSQqZ9MgeZ
//201.75.18.252/32

// DB Connection:
const conn = require ("./db/conn");
conn();

app.use(cors());
app.use(express.json());
app.use("/api",routes);


app.listen(3000, function () {
    console.log('Servidor online! Porta 3000');
})
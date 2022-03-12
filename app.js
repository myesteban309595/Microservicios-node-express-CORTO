const express = require('express');
const cors = require('cors'); // & libreria para poder hacer peticiones desde cualquier dominio
const path = require('path'); //& 

const colors = require('colors');
const app = express();

const config = require('./config');

app.use(express.json());

const PORT = config.module.PORT || 3000

app.get('/', (req,res)=> {
    res.json('hola desde app.js todo OK por aqui')
})

app.listen(PORT, () => {
    console.log(("escuchando desde el localhost:"+PORT+" ").inverse);
})
const express = require('express');
const cors = require('cors'); // & libreria para poder hacer peticiones desde cualquier dominio
const path = require('path'); //& sirve para encontrar las rutas de un HTML
const router = require('./routes/routes')

const {json, urlencoded} = express;

const colors = require('colors');
const app = express(); //^ servidor que va estar corriendo

const config = require('./config');

app.use(express.json());

const PORT = config.module.PORT || 3000

app.use(json());
app.use(urlencoded({extended: false})); //~ para poder tener acceso a lo que venga en esa url

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions)); //^ cualquier origen puede acceder a nuestro microservicio

app.use(router) //& vamos a usar el router que nos provee express

//^ ====== enlazamos y enviamos los archivos del directorio con las carpetas ==========

app.use('/home', (req,res) => {

    res.sendFile(path.join(__dirname+'/html/index.html')) //~ con esto unimos nuestro directorio con las carpetas del cproyecto, html y enviamos el archivo
});

//^====================================================================================

app.get('/', (req,res)=> {
    res.json('hola desde app.js todo OK por aqui')
})

//^ ==================   PUERTO DE ESCUCHA    =========================================

app.listen(PORT, () => {
    console.log(("escuchando desde el localhost:"+PORT+" ").inverse);
})
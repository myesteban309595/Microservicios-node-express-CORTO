const express = require('express')
const router = express.Router();

const holaRuta = require('./hola');

router.use('/hola', holaRuta);

module.exports = router 

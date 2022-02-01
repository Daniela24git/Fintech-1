const express = require('express');
const { mostrar } = require('../controladores/perfil.controlador');
const rutas = express.Router()

const {isLoggedIn} = require('../lib/auth')

rutas.use(isLoggedIn)

rutas.get('/Cliente/:id', mostrar)


module.exports = rutas
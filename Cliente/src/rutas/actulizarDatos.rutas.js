const express = require('express');
const rutas = express.Router()

const {mostrar, mandar} = require('../controladores/actulizacionDatos.controlador')

rutas.get('/Datos/:id', mostrar)
rutas.post('/Datos/', mandar)

module.exports = rutas
const express = require('express');
const rutas = express.Router()

const {traer, Mandar} = require('../controladores/compra.cotrolador')

rutas.get('/eleccion/:id', traer)
rutas.post('/eleccion/:id',Mandar)


module.exports = rutas
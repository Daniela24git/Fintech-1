const express = require('express');
const rutas = express.Router()

const {mostrarEntradasSalidas, mostrarEntrada, mostrarSalida} = require('../Controladores/entradaSalida.controlador')
const {isLoggedIn} = require('../lib/auth')

rutas.use(isLoggedIn)

rutas.get('/eleccion/:id', isLoggedIn, mostrarEntradasSalidas)
rutas.get('/entradas/agregar/:id', isLoggedIn, mostrarEntrada)
rutas.get('/Salidas/agregar/:id', isLoggedIn, mostrarSalida)

module.exports = rutas
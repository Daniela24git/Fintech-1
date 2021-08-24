const express = require('express');
const rutas = express.Router()

const {mostrarEntradasSalidas, mostrarEntrada, mostrarSalida, mandarEntrada, listaEntrada, detallelistaEntrada, detallelistaSalidas, MandarSalida, ListaSalidas} = require('../Controladores/entradaSalida.controlador')
const {isLoggedIn} = require('../lib/auth')

rutas.use(isLoggedIn)

rutas.get('/eleccion/:id', isLoggedIn, mostrarEntradasSalidas)
rutas.get('/entradas/agregar/:id', isLoggedIn, mostrarEntrada)
rutas.get('/Salidas/agregar/:id', isLoggedIn, mostrarSalida)
rutas.post('/entradas/agregar/:id', isLoggedIn, mandarEntrada)
rutas.post('/Salidas/agregar/:id', isLoggedIn, MandarSalida)
rutas.get('/entradas/Lista/:id', isLoggedIn, listaEntrada)
rutas.get('/Salidas/Lista/:id', isLoggedIn, ListaSalidas)
rutas.get('/entradas/Lista/detalle/:id', isLoggedIn, detallelistaEntrada)
rutas.get('/Salidas/Lista/detalle/:id', isLoggedIn, detallelistaSalidas)

module.exports = rutas
const express = require('express');
const rutas = express.Router()

const {traer, Mandar} = require("../controladores/formaPago.controlador")

const {isLoggedIn} = require("../lib/auth")

rutas.get("/notaVenta/:id", isLoggedIn, traer)
rutas.post('/notaVenta/', isLoggedIn, Mandar)

module.exports = rutas
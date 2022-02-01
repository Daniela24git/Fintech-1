const express = require('express');
const rutas = express.Router()

const {traer, Mandar, traerDatos, MandarDatos} = require("../controladores/formaPago.controlador")

const {isLoggedIn} = require("../lib/auth")

rutas.get("/notaVenta/:id", isLoggedIn, traer)
rutas.post('/notaVenta/', isLoggedIn, Mandar)
rutas.get("/factura/:id", isLoggedIn, traerDatos)
rutas.post('/factura/', isLoggedIn, MandarDatos)

module.exports = rutas
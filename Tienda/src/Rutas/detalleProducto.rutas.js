const express = require('express');
const rutas = express.Router()

const {isLoggedIn} = require('../lib/auth')
const {MostrarDetalle, MandarDetalle} = require('../Controladores/detalleProducto.controlador')

rutas.get("/agregar/:id", isLoggedIn, MostrarDetalle)
rutas.post("/agregar/:id", isLoggedIn, MandarDetalle)

module.exports = rutas
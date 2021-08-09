const express = require('express');
const rutas = express.Router()

const {traer} = require("../controladores/formaPago.controlador")

const {isLoggedIn} = require("../lib/auth")

rutas.get("/notaVenta", isLoggedIn, traer)

module.exports = rutas
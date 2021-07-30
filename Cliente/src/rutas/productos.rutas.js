const express = require('express');
const rutas = express.Router();

const {calidad}=require("../controladores/producto.controlador")

rutas.get("/lista/:id",calidad)

module.exports=rutas
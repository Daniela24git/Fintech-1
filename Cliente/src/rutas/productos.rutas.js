const express = require('express');
const rutas = express.Router();

const {calidad, Mandar}=require("../controladores/producto.controlador")

rutas.get("/lista/:id",calidad)
rutas.post("/lista/:id", Mandar)

module.exports=rutas
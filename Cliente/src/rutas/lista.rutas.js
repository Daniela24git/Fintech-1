const express = require('express');

const  rutas = express.Router()
const{Lista, Eliminar} = require("../controladores/lista.controlador")

rutas.get("/listaCompleta/:id", Lista)
rutas.get("/Eliminar/:id" , Eliminar)


module.exports = rutas
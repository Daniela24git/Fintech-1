const express = require('express');
const router = express.Router();

const { isLoggedIn } = require('../lib/auth');

const {renderAddClientes,addCliete,renderClientes,deleteClientes,renderEditCliente,editCliente, Perfil}=  require('../Controladores/cliente.controlador');

// Authorization
router.use(isLoggedIn);

// Routes
router.get('/agregar/:id', isLoggedIn, renderAddClientes);
router.post('/agregar/:id', isLoggedIn, addCliete);
router.get('/lista/:id', isLoggedIn, renderClientes);
router.get('/Elimnar/:id', isLoggedIn, deleteClientes);
router.get('/editar/:id', isLoggedIn, renderEditCliente);
router.post('/editar/:id', isLoggedIn, editCliente);
router.get('/Perfil/:id', isLoggedIn, Perfil)

module.exports = router; 
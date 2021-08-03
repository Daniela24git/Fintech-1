const express = require('express');
const router = express.Router();

const { renderSignUp, signUp, renderSignIn, signIn, cierreSeccion } = require('../controladores/registro.controlador')

// SIGNUP
router.get('/Registro', renderSignUp);
router.post('/Registro', signUp);

// SINGIN
router.get('/Login', renderSignIn);
router.post('/Login', signIn);

router.get('/cerrarSecion', cierreSeccion);

module.exports = router;
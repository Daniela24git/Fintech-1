const express = require('express');
const router = express.Router();

const { isLoggedIn } = require('../lib/auth');
const { renderUserProfile } = require('../controladores/usuario.controlador');

router.get('/tienda', isLoggedIn, renderUserProfile);

module.exports = router; 
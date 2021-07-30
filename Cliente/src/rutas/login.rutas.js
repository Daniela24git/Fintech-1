const express = require('express');
const router = express.Router();

const { renderLogin } = require('../controladores/login.controlador');

router.get('/', renderLogin);

module.exports = router;
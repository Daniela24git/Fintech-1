const express = require('express');
const router = express.Router();

const { mostrar } = require('../controladores/index.controlador');

router.get('/', mostrar);

module.exports = router;
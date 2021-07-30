const express = require('express');
const router = express.Router();

const { rederList } = require('../controladores/Tiendas.controlador');

router.get('/lista', rederList)

module.exports = router
const express = require('express');
const router = express.Router();

const { isLoggedIn } = require('../lib/auth')
const { renderConsumibles, renderNoConsumibles, renderBebidas } = require('../controladores/Categorias.controlador');


router.use(isLoggedIn)
router.get('/consumibles/:id', isLoggedIn, renderConsumibles);
router.get('/bebidas/:id', isLoggedIn, renderBebidas);
router.get('/noconsumibles/:id', isLoggedIn, renderNoConsumibles);

module.exports = router;
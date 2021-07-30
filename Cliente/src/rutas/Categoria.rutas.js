const express = require('express');
const router = express.Router();

const { isLoggedIn } = require('../lib/auth')
const { renderConsumibles, renderNoConsumibles, renderBebidas } = require('../controladores/Categorias.controlador');


router.use(isLoggedIn)
router.get('/consumibles', isLoggedIn, renderConsumibles);
router.get('/bebidas', isLoggedIn, renderBebidas);
router.get('/noconsumibles', isLoggedIn, renderNoConsumibles);

module.exports = router;
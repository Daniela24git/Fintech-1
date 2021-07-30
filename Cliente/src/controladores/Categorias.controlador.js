const categoriaCtrl = {};
const pool = require('../configuracionBaseDatos/baseDatos.sql');

categoriaCtrl.renderConsumibles = async (req, res) => {
    const consumibles = await pool.query("SELECT * FROM productos WHERE categoria = 'Consumible'");
    const lista = await pool.query("SELECT * FROM detallelistaproductos")
    res.render('categoria/consumibles', { consumibles, lista })
}

categoriaCtrl.renderNoConsumibles = async (req, res) => {
    const NoConsumibles = await pool.query("SELECT * FROM productos WHERE categoria = 'No consumible'");
    const lista = await pool.query("SELECT * FROM detallelistaproductos")
    res.render('categoria/noconsumibles', { NoConsumibles, lista })
}

categoriaCtrl.renderBebidas = async (req, res) => {
    const bebidas = await pool.query("SELECT * FROM productos WHERE categoria = 'bebidas'");
    const lista = await pool.query("SELECT * FROM detallelistaproductos")
    res.render('categoria/bebidas', { bebidas, lista })
}

module.exports = categoriaCtrl;
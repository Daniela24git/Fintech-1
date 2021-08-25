const categoriaCtrl = {};
const pool = require('../configuracionBaseDatos/baseDatos.sql');

categoriaCtrl.renderConsumibles = async (req, res) => {
    const id = req.params.id
    const consumibles = await pool.query("SELECT * FROM categoriaProductos  WHERE categoria = 'Consumible'");
    const tienda = await pool.query("SELECT * FROM Tiendas where idTiendas = ?", [id])
    const NombreLista = await pool.query('SELECT nombreLista FROM listaproductos WHERE tiendaIdTiendas = ?', [id])
    const lista = await pool.query("SELECT * FROM listaCompras")
    res.render('categoria/consumibles', { consumibles, lista, tienda, NombreLista })
}

categoriaCtrl.renderNoConsumibles = async (req, res) => {
    const id = req.params.id
    const NoConsumibles = await pool.query("SELECT * FROM categoriaProductos  WHERE categoria = 'No consumible'");
    const tienda = await pool.query("SELECT * FROM Tiendas where idTiendas = ?", [id])
    const NombreLista = await pool.query('SELECT nombreLista FROM listaproductos WHERE tiendaIdTiendas = ?', [id])
    const lista = await pool.query("SELECT * FROM listaCompras")
    res.render('categoria/noconsumibles', { NoConsumibles, lista, tienda, NombreLista })
}

categoriaCtrl.renderBebidas = async (req, res) => {
    const id = req.params.id
    const bebidas = await pool.query("SELECT * FROM categoriaProductos  WHERE categoria = 'bebidas'");
    const tienda = await pool.query("SELECT * FROM Tiendas where idTiendas = ?", [id])
    const NombreLista = await pool.query('SELECT nombreLista FROM listaproductos WHERE tiendaIdTiendas = ?', [id])
    const lista = await pool.query("SELECT * FROM listaCompras")
    res.render('categoria/bebidas', { bebidas, lista, tienda,NombreLista })
}

module.exports = categoriaCtrl;
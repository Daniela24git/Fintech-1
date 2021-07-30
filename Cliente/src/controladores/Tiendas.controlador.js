const Tiendas = {};

const pool = require('../configuracionBaseDatos/baseDatos.sql');

Tiendas.rederList = async (req, res) => {
    const lista = await pool.query('SELECT * FROM Tienda')
    res.render('Tiendas', { lista });
}

module.exports = Tiendas;

const Tiendas = {};

const sql = require('../configuracionBaseDatos/baseDatos.sql');

Tiendas.rederList = async (req, res) => {
    const lista = await sql.query('SELECT * FROM Tiendas')
    res.render('Tiendas', { lista });
}

module.exports = Tiendas;

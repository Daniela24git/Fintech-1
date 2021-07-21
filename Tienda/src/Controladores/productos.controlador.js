const ProductosCtrl = {};

const orm = require('../configuracionBaseDatos/baseDatos.orm')
const sql = require('../configuracionBaseDatos/baseDatos.sql')

ProductosCtrl.renderProductos = async (req, res) => {
    const id = req.params.id
    const productos = await sql.query("SELECT * FROM productos where tiendaId = ?", [id])
    res.render('productosVenta', { productos });
}

ProductosCtrl.renderEditLink = async (req, res) => {
    const id = req.params.id;
    const Productos = await sql.query('SELECT * FROM productos WHERE id = ?', [id]);
    res.render('productos/editar', { Productos });
};

ProductosCtrl.editLink = async (req, res) => {
    const id = req.params.id;
    const IDS = req.user.id
    const { precioVenta } = req.body;
    const newProducto = {
        precioVenta
    };

    await orm.productos.findOne({ where: { id: id } })
        .then(provedor => {
            provedor.update(newProducto)
            req.flash('success', 'Se Actualizo Correctamente');
            res.redirect('/productos/lista/' + IDS);
        })
}

module.exports = ProductosCtrl;
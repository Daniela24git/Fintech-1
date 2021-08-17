const ProductosCtrl = {};

const orm = require('../configuracionBaseDatos/baseDatos.orm')
const sql = require('../configuracionBaseDatos/baseDatos.sql')

ProductosCtrl.renderProductos = async (req, res) => {
    const id = req.params.id
    const productos = await sql.query("SELECT * FROM productos p join productoEntradas e on p.productoEntradaId = e.id where p.tiendaId = ?", [id])
    res.render('productosVenta', { productos });
}

ProductosCtrl.renderEdit = async (req, res) => {
    const id = req.params.id;
    const Productos = await sql.query('SELECT * FROM productos WHERE id = ?', [id]);
    res.render('productos/editar', { Productos });
};

ProductosCtrl.edit = async (req, res) => {
    const id = req.params.id;
    const IDS = req.user.id
    const { precioVenta, productoCantidad } = req.body;
    const newProducto = {
        productoCantidad,
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
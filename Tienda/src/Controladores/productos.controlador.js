const ProductosCtrl = {};

const orm = require('../configuracionBaseDatos/baseDatos.orm')
const sql = require('../configuracionBaseDatos/baseDatos.sql')

ProductosCtrl.renderProductos = async (req, res) => {
    const id = req.params.id
    const productos = await sql.query("SELECT * FROM productoscantidad p where p.tiendaIdTiendas = ?", [id])
    res.render('productosVenta', { productos });
}

ProductosCtrl.renderEdit = async (req, res) => {
    const id = req.params.id;
    const Productos = await sql.query('SELECT * FROM productos WHERE idProductos = ?', [id]);
    res.render('productos/editar', { Productos });
};

ProductosCtrl.edit = async (req, res) => {
    const id = req.params.id;
    const IDS = req.user.idUsuarios
    const { precioVenta, productoCantidad } = req.body;
    const newProducto = {
        productoCantidad,
        precioVenta
    };

    await orm.productos.findOne({ where: { idProductos: id } })
        .then(provedor => {
            provedor.update(newProducto)
            req.flash('success', 'Se Actualizo Correctamente');
            res.redirect('/productos/lista/' + IDS);
        })
}

module.exports = ProductosCtrl;
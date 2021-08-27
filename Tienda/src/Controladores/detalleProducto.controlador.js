const detalleProducto = {}

const orm = require('../configuracionBaseDatos/baseDatos.orm')
const sql = require('../configuracionBaseDatos/baseDatos.sql')

detalleProducto.MostrarDetalle = async(req, res) =>{
    const id = req.params.id
    const porsentajes = await sql.query("SELECT * FROM porsentajes")
    const prodcuto = await sql.query('SELECT * FROM productoscantidad WHERE idProductoEntradas = ?', [id])
    const ids = await sql.query('SELECT max(idDetalleCategorias) FROM detallecategorias')
    const listaCantidad = await sql.query("SELECT Cantidad FROM productoentradas WHERE idProductoEntradas = ?", [id])
    res.render('detalleProducto/detalleProductos', {prodcuto, ids, listaCantidad, porsentajes});
}

detalleProducto.MandarDetalle = async(req, res) =>{
    const id = req.params.id
    const ids = req.user.idUsuarios
    const {unidadVeneta, producto, cantidadVenta, productoCantidad, precioVenta, detalleCategoriaIdDetalleCategorias} = req.body

    const nuevoSubcategoria = {
        unidadVeneta,
        cantidadVenta
    }
    const nuevoProducto = {
        productoCantidad,
        precioVenta,
        productoEntradaIdProductoEntradas: producto,
        usuarioIdUsuarios: ids,
        tiendaIdTiendas: ids,
        detalleCategoriaIdDetalleCategorias: detalleCategoriaIdDetalleCategorias
    }
    await orm.detalleCategoria.create(nuevoSubcategoria)
    await orm.productos.create(nuevoProducto)
    req.flash('success', 'Guradado Existoso')
     res.redirect('/productos/lista/' + ids);
}

module.exports = detalleProducto
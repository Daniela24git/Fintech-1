const detalleProducto = {}

const { or } = require('sequelize/types')
const orm = require('../configuracionBaseDatos/baseDatos.orm')
const sql = require('../configuracionBaseDatos/baseDatos.sql')

detalleProducto.MostrarDetalle = async(req, res) =>{
    const id = req.params.id
    const prodcuto = await sql.query('SELECT * FROM productoEntradas WHERE idProductoEntradas = ?', [id])
    res.render('detalleProducto/detalleProductos', {prodcuto});
}

detalleProducto.MandarDetalle = async(req, res) =>{
    const id = req.params.id
    const ids = req.user.idUsuarios
    const {unidadVeneta, cantidadVenta, productoCantidad, precioVenta} = req.body
    const nuevoProducto = {
        productoCantidad,
        precioVenta,
        productoEntradaIdProductoEntradas: id,
        usuarioIdUsuarios: ids,
        tiendaIdTiendas: ids
    }
    const nuevoSubcategoria = {
        unidadVeneta,
        cantidadVenta
    }
    await orm.productos.create(nuevoProducto)
    await orm.detalleCategoria.create(nuevoSubcategoria)
    req.flash('success', 'Guradado Existoso')
     res.redirect('/productos/lista/' + ids);
}

module.exports = detalleProducto
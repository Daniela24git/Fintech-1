const detalleProducto = {}

const orm = require('../configuracionBaseDatos/baseDatos.orm')
const sql = require('../configuracionBaseDatos/baseDatos.sql')

detalleProducto.MostrarDetalle = async(req, res) =>{
    const id = req.params.id
    const porsentajes = await sql.query("SELECT * FROM porcentajes")
    const prodcuto = await sql.query('SELECT * FROM productoentradas WHERE idProductoEntradas = ?', [id])
    const ids = await sql.query('SELECT max(idDetalleCategorias) FROM detallecategorias')
    const listaCantidad = await sql.query("SELECT precioUnidad FROM productoentradas WHERE idProductoEntradas = ?", [id])
    const listaDetalleUnidad = await sql.query("SELECT cantidadMedida FROM detalleunidadmedidas WHERE productoEntradaIdProductoEntradas = ?", [id])
    res.render('detalleProducto/detalleProductos', {prodcuto, ids, listaCantidad, porsentajes, listaDetalleUnidad});
}

detalleProducto.MandarDetalle = async(req, res) =>{
    const id = req.params.id
    const ids = req.user.idUsuarios
    const {unidadVeneta, precioTotalVenta, productos, cantidadVenta, productoCantidad, precioVenta, categoria} = req.body

    const nuevoSubcategoria = {
        unidadVeneta,
        cantidadVenta 
    }
    const nuevoProducto = {
        productoCantidad,
        precioVenta,
        precioTotalVenta,
        productoEntradaIdProductoEntradas: productos,
        usuarioIdUsuarios: ids,
        tiendaIdTiendas: ids,
        detalleCategoriaIdDetalleCategorias: categoria
    }
    await orm.detalleCategoria.create(nuevoSubcategoria)
    await orm.productos.create(nuevoProducto)
    req.flash('success', 'Guradado Existoso')
     res.redirect('/productos/lista/' + ids);
}

module.exports = detalleProducto
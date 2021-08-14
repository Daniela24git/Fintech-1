const ProductoEntradaCtrl = {};

const orm = require('../configuracionBaseDatos/baseDatos.orm')
const sql = require('../configuracionBaseDatos/baseDatos.sql')

ProductoEntradaCtrl.renderEntrada = async (req, res) => {
    const id = req.params.id
    const listaProveedor = await sql.query("SELECT * FROM provedores WHERE id = ?", [id])
    const listaCategoria = await sql.query("SELECT * FROM categorias")
    const idProductoEntrada = await sql.query("SELECT max(id) FROM productoEntradas")
    const listaUnidad = await sql.query("SELECT * FROM unidadMedidas")
    res.render("ProductosEntrada/agregar", { listaProveedor, listaCategoria, listaUnidad, idProductoEntrada })
}

ProductoEntradaCtrl.addEntrada = async (req, res) => {

    const id = req.params.id
    const IDS = req.user.id

    const { productoEntradaId, NombreProducto, codigo, cantidadMedida, Cantidad, precioActual, FechaCadusidad, precioVenta, categoriaId, unidadMedidaId } = req.body

    const productoVenta = {
        productoCantidad: Cantidad,
        precioVenta,
        tiendaId: IDS,
        usuarioId: IDS,
        productoEntradaId: productoEntradaId,
    }

    const NuevaEntrada = {
        codigo,
        NombreProducto,
        Cantidad,
        precioActual,
        FechaCadusidad,
        provedoreId: id,
        tiendaId: IDS,
        usuarioId: IDS,
        categoriaId: categoriaId,
        unidadMedidaId: unidadMedidaId
    }

    const nuevaCantidadUnidad = {
        cantidadMedida,
        unidadMedidaId:unidadMedidaId
    }

    await orm.entredaProductos.create(NuevaEntrada);
    await orm.productos.create(productoVenta);
    await orm.detalleUnidadMedidas.create(nuevaCantidadUnidad)
    req.flash('success', "Se guardo correctamente")
    res.redirect("/ProductoEntrada/lista/" + IDS)
}

ProductoEntradaCtrl.renderProductos = async (req, res) => {
    const id = req.params.id
    const DatosProducto = await sql.query("SELECT * FROM productoEntradas WHERE tiendaId = ?", [id])
    res.render("ProductosEntrada/lista", { DatosProducto })

}

ProductoEntradaCtrl.EliminarProductos = async (req, res) => {
    const id = req.params.id;
    await orm.entredaProductos.destroy({ where: { id: id } });
    await orm.productos.destroy({ where: { id: id } });
    await orm.categoria.destroy({ where: { id: id } });
    req.flash('success', 'Se Elimino Correctamente');
    res.redirect('/ProductoEntrada/lista/' + id);

}
ProductoEntradaCtrl.renderEditarEntrada = async (req, res) => {
    const id = req.params.id;
    const Productos = await sql.query("SELECT * FROM productoEntradas WHERE id =?", [id])
    res.render("ProductosEntrada/editar", { Productos })
}
ProductoEntradaCtrl.EditarEntrada = async (req, res) => {
    const IDS = req.user.id
    const id = req.params.id
    const { NombreProducto, Cantidad, precioActual, FechaCadusidad } = req.body
    const EntradaEditad = {
        NombreProducto,
        Cantidad,
        precioActual,
        FechaCadusidad
    }

    await orm.entredaProductos.findOne({ where: { id: id } })
        .then(productoEntrada => {
            productoEntrada.update(EntradaEditad)
            req.flash('success', 'Se Actualizo Correctamente');
            res.redirect('/ProductoEntrada/lista/' + IDS);
        })
}
module.exports = ProductoEntradaCtrl
